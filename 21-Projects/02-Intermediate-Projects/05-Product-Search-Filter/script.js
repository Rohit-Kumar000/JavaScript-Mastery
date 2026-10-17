
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
    name: "Smart Watch",
    category: "Electronics",
    price: 3499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Running Sneakers",
    category: "Fashion",
    price: 2799,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Everyday Backpack",
    category: "Accessories",
    price: 1499,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 999,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Casual T-Shirt",
    category: "Fashion",
    price: 799,
    rating: 4.4,
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
    name: "Leather Handbag",
    category: "Fashion",
    price: 2299,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 4299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Minimal Wallet",
    category: "Accessories",
    price: 599,
    rating: 4.1,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Premium Hoodie",
    category: "Fashion",
    price: 1899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 899,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80"
  }
];

const $ = selector => document.querySelector(selector);

const searchInput = $("#searchInput");
const minPriceInput = $("#minPrice");
const maxPriceInput = $("#maxPrice");
const ratingFilter = $("#ratingFilter");
const sortSelect = $("#sortSelect");
const productGrid = $("#productGrid");

let selectedCategories = new Set();

const formatPrice = price =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(price);

// Create category checkboxes from the product data.
function renderCategoryFilters() {
  const categories = [...new Set(products.map(p => p.category))];

  $("#categoryFilters").innerHTML = categories.map(category => `
    <label class="category-option">
      <input type="checkbox" value="${category}" data-category />
      <span>${category}</span>
    </label>
  `).join("");
}

// Render the product cards.
function renderProducts(items) {
  productGrid.innerHTML = items.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
      </div>
      <p class="product-category">${product.category}</p>
      <h3>${product.name}</h3>
      <p class="product-rating">★ ${product.rating.toFixed(1)} <span>/ 5</span></p>
      <div class="product-bottom">
        <span class="product-price">${formatPrice(product.price)}</span>
      </div>
    </article>
  `).join("");

  $("#emptyState").hidden = items.length !== 0;
  productGrid.hidden = items.length === 0;
}

// Apply search, all selected filters and sorting.
function applyFilters() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const minPrice = minPriceInput.value === ""
    ? 0
    : Number(minPriceInput.value);
  const maxPrice = maxPriceInput.value === ""
    ? Infinity
    : Number(maxPriceInput.value);
  const minimumRating = Number(ratingFilter.value);

  let filteredProducts = products.filter(product => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategories.size === 0 ||
      selectedCategories.has(product.category);

    const matchesPrice =
      product.price >= minPrice &&
      product.price <= maxPrice;

    const matchesRating = product.rating >= minimumRating;

    return matchesSearch && matchesCategory &&
      matchesPrice && matchesRating;
  });

  switch (sortSelect.value) {
    case "price-low":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filteredProducts.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  renderProducts(filteredProducts);
  renderActiveFilters();

  $("#resultCount").textContent =
    `${filteredProducts.length} product${filteredProducts.length !== 1 ? "s" : ""} found`;

  $("#activeFilters").textContent =
    selectedCategories.size
      ? [...selectedCategories].join(", ")
      : "All products";
}

// Display selected filters as removable chips.
function renderActiveFilters() {
  const chips = [];

  if (searchInput.value.trim()) {
    chips.push({ label: `Search: ${searchInput.value.trim()}`, type: "search" });
  }

  selectedCategories.forEach(category => {
    chips.push({ label: category, type: "category", value: category });
  });

  if (minPriceInput.value !== "" || maxPriceInput.value !== "") {
    chips.push({
      label: `Price: ₹${minPriceInput.value || 0} – ${maxPriceInput.value || "Any"}`,
      type: "price"
    });
  }

  if (Number(ratingFilter.value) > 0) {
    chips.push({
      label: `${ratingFilter.value}+ stars`,
      type: "rating"
    });
  }

  $("#activeChips").innerHTML = chips.map(chip => `
    <button class="chip" data-chip="${chip.type}"
      ${chip.value ? `data-value="${chip.value}"` : ""}>
      ${chip.label} ×
    </button>
  `).join("");
}

// Remove an individual filter chip.
$("#activeChips").addEventListener("click", event => {
  const button = event.target.closest("[data-chip]");
  if (!button) return;

  switch (button.dataset.chip) {
    case "search":
      searchInput.value = "";
      break;
    case "category":
      selectedCategories.delete(button.dataset.value);
      document.querySelectorAll("[data-category]").forEach(input => {
        input.checked = selectedCategories.has(input.value);
      });
      break;
    case "price":
      minPriceInput.value = "";
      maxPriceInput.value = "";
      break;
    case "rating":
      ratingFilter.value = "0";
      break;
  }

  applyFilters();
});

// Category changes.
$("#categoryFilters").addEventListener("change", event => {
  const input = event.target.closest("[data-category]");
  if (!input) return;

  if (input.checked) {
    selectedCategories.add(input.value);
  } else {
    selectedCategories.delete(input.value);
  }

  applyFilters();
});

// Search, price, rating and sorting events.
searchInput.addEventListener("input", applyFilters);
minPriceInput.addEventListener("input", applyFilters);
maxPriceInput.addEventListener("input", applyFilters);
ratingFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

// Reset all filters.
function clearFilters() {
  searchInput.value = "";
  minPriceInput.value = "";
  maxPriceInput.value = "";
  ratingFilter.value = "0";
  sortSelect.value = "featured";
  selectedCategories.clear();

  document.querySelectorAll("[data-category]").forEach(input => {
    input.checked = false;
  });

  applyFilters();
}

$("#clearFilters").addEventListener("click", clearFilters);
$("#emptyReset").addEventListener("click", clearFilters);

// Initial render.
renderCategoryFilters();
applyFilters();
