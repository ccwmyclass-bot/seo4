document.addEventListener('DOMContentLoaded', () => {
    // Determine which page we are on
    const path = window.location.pathname;
    const page = path.split("/").pop();

    if (page === "index.html" || page === "") {
        renderFeaturedProducts();
    } else if (page === "casual.html") {
        renderProductsByCategory("casual");
    } else if (page === "formal.html") {
        renderProductsByCategory("formal");
    } else if (page === "jewelry.html") {
        renderProductsByCategory("jewelry");
    } else if (page === "others.html") {
        renderProductsByCategory("accessories");
    } else if (page === "product.html") {
        renderProductDetail();
    }
});

function renderFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    // Take first 4 products
    const featured = products.slice(0, 4);
    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function renderProductsByCategory(category) {
    const container = document.getElementById('product-list');
    if (!container) return;
    
    const filtered = products.filter(p => p.category === category);
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <a href="product.html?id=${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                </div>
            </a>
        </div>
    `;
}

function renderProductDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = products.find(p => p.id === id);
    
    const container = document.getElementById('product-detail');
    if (!container || !product) return;
    
    container.innerHTML = `
        <div class="detail-container">
            <div class="detail-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="detail-info">
                <h1>${product.name}</h1>
                <p class="price">${product.price}</p>
                <div class="description">
                    <p>${product.description}</p>
                </div>
                <br>
                <button class="btn">Add to Cart</button>
                <br><br>
                <p><strong>Category:</strong> ${product.category}</p>
            </div>
        </div>
    `;
}
