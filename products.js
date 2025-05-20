// Filter products by category
document.querySelectorAll('.categories-list a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Update active category
        document.querySelector('.categories-list a.active').classList.remove('active');
        e.target.classList.add('active');
        
        const category = e.target.getAttribute('data-category');
        filterProducts(category);
    });
});

// Filter products function
function filterProducts(category) {
    const allProductsContainer = document.getElementById('all-products');
    allProductsContainer.innerHTML = '';
    
    let filteredProducts = products;
    if (category !== 'all') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    if (filteredProducts.length === 0) {
        allProductsContainer.innerHTML = '<p class="no-products">No products found in this category.</p>';
        return;
    }
    
    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5-Math.floor(product.rating))}
                    <span class="rating-value">${product.rating}</span>
                </div>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        allProductsContainer.appendChild(productCard);
    });
    
    // Add event listeners to new "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Initialize products page
document.addEventListener('DOMContentLoaded', () => {
    filterProducts('all');
});