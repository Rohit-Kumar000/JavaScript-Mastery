
const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 1999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Classic Wrist Watch",
    category: "Accessories",
    price: 2499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Premium Sneakers",
    category: "Fashion",
    price: 2999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Minimal Backpack",
    category: "Accessories",
    price: 1499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Electronics",
    price: 3499,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 1799,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Sunglasses",
    category: "Accessories",
    price: 999,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
  }
];

const $ = (selector) => document.querySelector(selector);

const productGrid = $("#productGrid");
const cartItems = $("#cartItems");
const searchInput = $("#searchInput");
const sortSelect = $("#sortSelect");

let activeCategory = "All";
let cart = loadCart();
let toastTimer;

// Format prices in Indian Rupees.
const formatPrice = (amount) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);

// Restore the cart safely from localStorage.
function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("shopease-cart")) || [];

    if (!Array.isArray(saved)) return [];

    return saved
      .filter(item =>
        products.some(product => product.id === item.id) &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        item.quantity <= 99
      )
      .map(item => ({
        id: item.id,
        quantity: item.quantity
      }));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem("shopease-cart", JSON.stringify(cart));
  } catch {
    showToast("Unable to save cart in this browser.");
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

// Render products using the current search, category and sort.
function renderProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  let filteredProducts = products.filter(product => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  switch (sortSelect.value) {
    case "low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
  }

  $("#productCount").textContent =
    `${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""}`;

  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div class="empty-state" style="grid-column: 1 / -1">
        <strong>No products found</strong>
        Try another search or category.
      </div>`;
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.display='none'"
        />
      </div>
      <p class="product-category">${product.category}</p>
      <h3>${product.name}</h3>
      <p class="rating">★ ${product.rating} <span>/ 5</span></p>
      <div class="product-bottom">
        <span class="price">${formatPrice(product.price)}</span>
        <button class="add-button" data-add="${product.id}">
          + Add
        </button>
      </div>
    </article>
  `).join("");
}

// Add a product or increase its quantity.
function addToCart(id) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    if (existingItem.quantity >= 99) {
      showToast("Maximum quantity reached.");
      return;
    }
    existingItem.quantity++;
  } else {
    cart.push({ id, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast("Product added to your cart!");
}

// Update quantity, never allowing it below one.
function changeQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  const nextQuantity = item.quantity + change;

  if (nextQuantity < 1) {
    removeFromCart(id);
    return;
  }

  if (nextQuantity > 99) {
    showToast("Maximum quantity is 99.");
    return;
  }

  item.quantity = nextQuantity;
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  showToast("Product removed from cart.");
}

function renderCart() {
  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity, 0
  );

  $("#cartCount").textContent = totalQuantity;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="empty-state">
        <strong>Your cart is feeling lonely 🛒</strong>
        Add something you love from our collection.
        <br />
        <a href="#products">Explore products →</a>
      </div>`;
  } else {
    cartItems.innerHTML = cart.map(item => {
      const product = products.find(p => p.id === item.id);

      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}" />
          <div class="cart-info">
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)} each</p>
            <div class="quantity">
              <button data-change="-1" data-id="${item.id}"
                aria-label="Decrease ${product.name} quantity">−</button>
              <span>${item.quantity}</span>
              <button data-change="1" data-id="${item.id}"
                aria-label="Increase ${product.name} quantity">+</button>
            </div>
          </div>
          <div class="cart-item-end">
            <strong>${formatPrice(product.price * item.quantity)}</strong>
            <button class="remove-button" data-remove="${item.id}">
              Remove
            </button>
          </div>
        </article>`;
    }).join("");
  }

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + product.price * item.quantity;
  }, 0);

  const shipping = subtotal === 0 || subtotal >= 2999 ? 0 : 99;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + shipping + tax;

  $("#subtotal").textContent = formatPrice(subtotal);
  $("#shipping").textContent =
    shipping === 0 && subtotal > 0 ? "FREE" : formatPrice(shipping);
  $("#tax").textContent = formatPrice(tax);
  $("#total").textContent = formatPrice(total);
}

// Category filters.
$("#categoryList").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  activeCategory = button.dataset.category;

  document.querySelectorAll(".filter").forEach(filter => {
    filter.classList.toggle("active", filter === button);
  });

  renderProducts();
});

// Search and sort.
searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

// Event delegation for product actions.
productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

// Event delegation for cart actions.
cartItems.addEventListener("click", event => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
    return;
  }

  const quantityButton = event.target.closest("[data-change]");
  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.id),
      Number(quantityButton.dataset.change)
    );
  }
});

$("#cartButton").addEventListener("click", () => {
  $("#cartSection").scrollIntoView({ behavior: "smooth" });
});

$("#clearCart").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is already empty.");
    return;
  }

  cart = [];
  saveCart();
  renderCart();
  showToast("Cart cleared.");
});

$("#checkoutButton").addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Add a product before checkout.");
    return;
  }

  showToast("Demo checkout only — no payment was made.");
});

// Initial page render.
renderProducts();
renderCart();
