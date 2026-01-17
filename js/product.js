document.addEventListener("DOMContentLoaded", function () {

  const products = [
    {
      name: "Acoustic Pro Headphones",
      category: "Electronics",
      price: 249,
      rating: 4.8,
      description: "Studio-grade noise cancelling headphones with premium sound.",
      image: "assets/product1.png"
    },
    {
      name: "Cloud SaaS Dashboard",
      category: "Software",
      price: 49,
      rating: 4.6,
      description: "Modern analytics dashboard for SaaS platforms.",
      image: "assets/product2.png"
    },
    {
      name: "Neptune UI Kit",
      category: "Design",
      price: 89,
      rating: 4.7,
      description: "Clean and scalable UI kit for modern web apps.",
      image: "assets/product3.png"
    },
    {
      name: "Zenith Smart Watch",
      category: "Electronics",
      price: 199,
      rating: 4.5,
      description: "Advanced fitness tracking smartwatch with AMOLED display.",
      image: "assets/product4.png"
    },
    {
      name: "Lumina DSLR Camera",
      category: "Electronics",
      price: 1299,
      rating: 4.9,
      description: "Professional DSLR camera for creators and photographers.",
      image: "assets/product5.png"
    },
    {
      name: "Clicky-Pro Keyboard",
      category: "Electronics",
      price: 159,
      rating: 4.4,
      description: "Mechanical keyboard designed for developers.",
      image: "assets/product6.png"
    },
    {
      name: "Vantage Analytics Suite",
      category: "Software",
      price: 299,
      rating: 4.7,
      description: "Enterprise analytics platform with real-time insights.",
      image: "assets/product7.png"
    },
    {
      name: "Agile Workspace Kit",
      category: "Design",
      price: 145,
      rating: 4.3,
      description: "Minimal workspace design kit for creative teams.",
      image: "assets/product8.png"
    },
    {
      name: "TaskFlow Manager",
      category: "Software",
      price: 59,
      rating: 4.6,
      description: "Task and productivity management app with automation.",
      image: "assets/product9.png"
    }
  ];

  const grid = document.getElementById("productGrid");
  const resultCount = document.getElementById("resultCount");

  const categoryFilter = document.getElementById("categoryFilter");
  const priceSort = document.getElementById("priceSort");
  const ratingSort = document.getElementById("ratingSort");
  const searchInput = document.getElementById("searchInput");

  function renderProducts(list) {
    grid.innerHTML = "";

    list.forEach(p => {
      const stars =
        "★".repeat(Math.round(p.rating)) +
        "☆".repeat(5 - Math.round(p.rating));

      grid.innerHTML += `
        <div class="card product-card">
          <span class="badge-sm">${p.category}</span>
          <img src="${p.image}" class="product-img" alt="${p.name}">
          <h3>${p.name}</h3>
          <p class="muted">${p.description}</p>
          <div class="rating">${stars} <span class="muted">(${p.rating})</span></div>
          <div class="price">$${p.price}</div>
          <button class="btn btn-primary">View</button>
        </div>
      `;
    });

    resultCount.textContent = `Showing ${list.length} products`;
  }

  function applyFilters() {
    let filtered = [...products];

    // Search
    const query = searchInput.value.toLowerCase();
    if (query) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    // Category
    if (categoryFilter.value !== "All") {
      filtered = filtered.filter(p => p.category === categoryFilter.value);
    }

    // Price
    if (priceSort.value === "low") {
      filtered.sort((a, b) => a.price - b.price);
    }
    if (priceSort.value === "high") {
      filtered.sort((a, b) => b.price - a.price);
    }

    // Rating
    if (ratingSort.value === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(filtered);
  }

  categoryFilter.addEventListener("change", applyFilters);
  priceSort.addEventListener("change", applyFilters);
  ratingSort.addEventListener("change", applyFilters);
  searchInput.addEventListener("input", applyFilters);

  renderProducts(products);

});
