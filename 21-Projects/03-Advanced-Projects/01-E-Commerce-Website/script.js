
"use strict";


const PRODUCT_API_URL = "https://fakestoreapi.com/products";

const CURRENCY_CODE = "INR";

const productGrid = document.getElementById("product-grid");
const statusBox = document.getElementById("status");
const resultCount = document.getElementById("result-count");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");
const sortFilter = document.getElementById("sort-filter");

const cartOverlay = document.getElementById("cart-overlay");
const cartItemsContainer = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartHeadingCount = document.getElementById("cart-heading-count");
const cartSubtotal = document.getElementById("cart-subtotal");
const checkoutButton = document.getElementById("checkout-button");

let products = [];
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("forma-cart") || "[]");
    return Array.isArray(saved)
      ? saved.filter(item =>
          item &&
          Number.isInteger(item.id) &&
          Number.isInteger(item.quantity) &&
          item.quantity > 0 &&
          typeof item.title === "string" &&
          Number.isFinite(item.price) &&
          typeof item.image === "string"
        )
      : [];
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("forma-cart", JSON.stringify(cart));
  } catch {
  }
}

function formatPrice(value, currency = CURRENCY_CODE) {
  if (!Number.isFinite(Number(value))) return "Price unavailable";

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 2
  }).format(Number(value));
}

function normalizeProduct(item) {
  if (
    item.id === undefined ||
    item.id === null ||
    typeof item.title !== "string" ||
    !Number.isFinite(Number(item.price)) ||
    !item.category ||
    typeof (item.thumbnail || item.image) !== "string"
  ) {
    return null;
  }

  const image = item.thumbnail || item.image;

  try {
    const parsedImage = new URL(image);
    if (!["https:", "http:"].includes(parsedImage.protocol)) return null;
  } catch {
    return null;
  }

  return {
    id: item.id,
    title: item.title,
    description: typeof item.description === "string"
      ? item.description
      : "",
    category: String(item.category),
    price: Number(item.price),
    currency: typeof item.currency === "string"
      ? item.currency
      : CURRENCY_CODE,
    image,
    stock: Number.isFinite(Number(item.stock))
      ? Number(item.stock)
      : null
  };
}

function setStatus(title, message, type = "loading", retry = false) {
  productGrid.hidden = true;
  statusBox.hidden = false;

  statusBox.replaceChildren();

  if (type === "loading") {
    const spinner = document.createElement("div");
    spinner.className = "spinner";
    statusBox.append(spinner);
  }

  const heading = document.createElement("h3");
  heading.textContent = title;

  const paragraph = document.createElement("p");
  paragraph.textContent = message;

  statusBox.append(heading, paragraph);

  if (retry) {
    const button = document.createElement("button");
    button.className = "primary-button";
    button.textContent = "Try again";
    button.addEventListener("click", fetchProducts);
    statusBox.append(button);
  }
}

async function fetchProducts() {
  if (!PRODUCT_API_URL.trim()) {
    resultCount.textContent = "Catalog not connected";

    setStatus(
      "Connect your product catalog",
      "No products are displayed because no API is configured. Add your genuine product API endpoint to PRODUCT_API_URL in js/app.js.",
      "error"
    );

    return;
  }

  setStatus(
    "Loading the catalog",
    "Fetching products from the connected catalog."
  );

  resultCount.textContent = "Loading…";

  try {
    const response = await fetch(PRODUCT_API_URL);

    if (!response.ok) {
      throw new Error(`Catalog request failed (${response.status}).`);
    }

    const data = await response.json();

    const rawProducts = Array.isArray(data)
      ? data
      : data.products;

    if (!Array.isArray(rawProducts)) {
      throw new Error("The API response does not contain a product list.");
    }

    products = rawProducts
      .map(normalizeProduct)
      .filter(product => product !== null);

    if (rawProducts.length > 0 && products.length === 0) {
      throw new Error(
        "Products were received, but none matched the required data format."
      );
    }

    populateCategories();
    renderProducts();

  } catch (error) {
    console.error("Catalog error:", error);

    products = [];
    resultCount.textContent = "Catalog unavailable";

    setStatus(
      "We couldn't load the catalog",
      `${error.message} Check your API endpoint and connection, then retry.`,
      "error",
      true
    );
  }
}

function populateCategories() {
  const categories = [...new Set(
    products.map(product => product.category)
  )].sort((a, b) => a.localeCompare(b));

  categoryFilter.replaceChildren();

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = "All categories";
  categoryFilter.append(allOption);

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function getVisibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortFilter.value;

  let filtered = products.filter(product => {
    const matchesSearch =
      product.title.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);

    const matchesCategory =
      category === "all" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sort === "name-asc") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  return filtered;
}

function createProductCard(product) {
  const article = document.createElement("article");
  article.className = "product-card";

  const imageBox = document.createElement("div");
  imageBox.className = "product-image";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.title;
  image.loading = "lazy";
  image.decoding = "async";

  image.addEventListener("error", () => {
    imageBox.replaceChildren();
    imageBox.setAttribute("aria-label", "Product image unavailable");
  }, { once: true });

  imageBox.append(image);

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const title = document.createElement("h3");
  title.className = "product-name";
  title.textContent = product.title;

  const price = document.createElement("p");
  price.className = "product-price";
  price.textContent = formatPrice(product.price, product.currency);

  const addButton = document.createElement("button");
  addButton.className = "add-button";
  addButton.type = "button";
  addButton.textContent = "Add to bag";
  addButton.addEventListener("click", () => addToCart(product.id));

  article.append(imageBox, category, title, price, addButton);

  return article;
}

function renderProducts() {
  statusBox.hidden = true;
  productGrid.hidden = false;

  const visible = getVisibleProducts();
  productGrid.replaceChildren();

  resultCount.textContent =
    `${visible.length} product${visible.length === 1 ? "" : "s"}`;

  if (visible.length === 0) {
    setStatus(
      products.length === 0 ? "No products available" : "No matching products",
      products.length === 0
        ? "The connected catalog returned no products."
        : "Try another search term or select a different category.",
      "empty"
    );
    return;
  }

  const fragment = document.createDocumentFragment();

  visible.forEach(product => {
    fragment.append(createProductCard(product));
  });

  productGrid.append(fragment);
  productGrid.hidden = false;
  statusBox.hidden = true;
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      currency: product.currency,
      image: product.image,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
}

function changeQuantity(productId, change) {
  const item = cart.find(entry => entry.id === productId);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(entry => entry.id !== productId);
  }

  saveCart();
  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function renderCart() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity, 0
  );

  cartCount.textContent = totalQuantity;
  cartHeadingCount.textContent = `(${totalQuantity})`;
  cartItemsContainer.replaceChildren();

  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "cart-empty";
    empty.textContent = "Your bag is empty. Explore the collection to add items.";
    cartItemsContainer.append(empty);
  }

  cart.forEach(item => {
    const row = document.createElement("article");
    row.className = "cart-item";

    const image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;

    image.addEventListener("error", () => {
      image.removeAttribute("src");
      image.alt = "Product image unavailable";
    }, { once: true });

    const details = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = item.title;

    const price = document.createElement("span");
    price.className = "cart-item-price";
    price.textContent = formatPrice(item.price, item.currency);

    const quantity = document.createElement("div");
    quantity.className = "quantity-control";

    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Decrease ${item.title} quantity`);
    decrease.addEventListener("click", () => changeQuantity(item.id, -1));

    const count = document.createElement("span");
    count.textContent = item.quantity;

    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Increase ${item.title} quantity`);
    increase.addEventListener("click", () => changeQuantity(item.id, 1));

    quantity.append(decrease, count, increase);
    details.append(title, price, quantity);

    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-button";
    remove.textContent = "Remove";
    remove.addEventListener("click", () => removeFromCart(item.id));

    row.append(image, details, remove);
    cartItemsContainer.append(row);
  });

  const currencies = new Set(cart.map(item => item.currency));

  if (currencies.size > 1) {
    cartSubtotal.textContent = "Multiple currencies";
  } else {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
    const currency = cart[0]?.currency || CURRENCY_CODE;
    cartSubtotal.textContent = formatPrice(subtotal, currency);
  }

  checkoutButton.disabled = cart.length === 0;
}

function openCart() {
  cartOverlay.hidden = false;
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartOverlay.hidden = true;
  document.body.classList.remove("cart-open");
}

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortFilter.addEventListener("change", renderProducts);

document.getElementById("cart-button").addEventListener("click", openCart);

document.querySelectorAll("[data-close-cart]").forEach(button => {
  button.addEventListener("click", closeCart);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !cartOverlay.hidden) closeCart();
});

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) return;

  alert(
    "Checkout preview only. No order or payment has been submitted."
  );
});

renderCart();
fetchProducts();
