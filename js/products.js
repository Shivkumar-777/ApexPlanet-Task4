const products = [
  { name: "Autonomous Rover", price: 450, rating: 4.8 },
  { name: "Smart Grid Node", price: 85, rating: 4.2 },
  { name: "Gesture Arm Controller", price: 0, rating: 4.9 }
];

function renderProducts(list) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Rating: ⭐ ${p.rating}</p>
    `;
    grid.appendChild(card);
  });
}

function sortProducts() {
  const value = document.getElementById("sortSelect").value;
  let sorted = [...products];

  if (value === "price") sorted.sort((a, b) => a.price - b.price);
  if (value === "rating") sorted.sort((a, b) => b.rating - a.rating);

  renderProducts(sorted);
}

renderProducts(products);
