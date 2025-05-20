// Sample product data

// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// DOM Elements
const featuredProductsContainer = document.getElementById('featured-products');
const cartCountElement = document.getElementById('cart-count');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mainNav = document.querySelector('.main-nav');
const newsletterForm = document.getElementById('newsletter-form');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFeaturedProducts();
    updateCartCount();
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
    
    // Newsletter form submission
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });
});

// Render featured products
function renderFeaturedProducts() {
    featuredProductsContainer.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        
        featuredProductsContainer.appendChild(productCard);
    });
    
    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add item to cart
function addToCart(e) {
    const productId = parseInt(e.target.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart in localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show feedback
    alert(`${product.name} added to cart!`);
}

// Update cart count in header
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;
}

// Cart page functionality (would be in cart.html)
function renderCartPage() {
    // This would be called from cart.html to display cart items
    // Implementation would be similar to renderFeaturedProducts()
}

// Checkout functionality
function checkout() {
    // This would handle the checkout process
    // In a real app, this would connect to a payment processor
}
// Enhanced Electronics Product Data
const products = [
    {
        id: 1,
        name: "Wireless Noise-Cancelling Headphones",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
        category: "Audio",
        brand: "SonicX",
        rating: 4.8,
        description: "Premium over-ear headphones with active noise cancellation and 30-hour battery life.",
        features: ["Bluetooth 5.0", "Touch controls", "Built-in microphone", "Foldable design"]
    },
    {
        id: 2,
        name: "Smart Fitness Watch Pro",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        category: "Wearables",
        brand: "FitTech",
        rating: 4.6,
        description: "Track your workouts, heart rate, sleep patterns and receive smartphone notifications.",
        features: ["1.4\" AMOLED display", "Water resistant", "7-day battery", "GPS tracking"]
    },
    {
        id: 3,
        name: "Portable Bluetooth Speaker",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
        category: "Audio",
        brand: "BoomAudio",
        rating: 4.5,
        description: "Compact yet powerful speaker with 20 hours playtime and IPX7 waterproof rating.",
        features: ["360° sound", "Party pairing", "Built-in mic", "USB-C charging"]
    },
    {
        id: 4,
        name: "Ultra HD 4K Smart TV",
        price: 899.99,
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575",
        category: "Televisions",
        brand: "VisionPlus",
        rating: 4.7,
        description: "55-inch 4K UHD LED smart TV with HDR and built-in streaming apps.",
        features: ["Android TV", "Dolby Vision", "Voice remote", "3 HDMI ports"]
    },
    {
        id: 5,
        name: "Gaming Laptop Pro",
        price: 1499.99,
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        category: "Computers",
        brand: "GameMaster",
        rating: 4.9,
        description: "High-performance gaming laptop with RTX graphics and 144Hz display.",
        features: ["Intel i7 processor", "16GB RAM", "1TB SSD", "RGB keyboard"]
    },
    {
        id: 6,
        name: "Mirrorless Camera Kit",
        price: 1099.99,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
        category: "Cameras",
        brand: "FotoPro",
        rating: 4.8,
        description: "Professional 24MP mirrorless camera with 4K video and lens kit.",
        features: ["4K/30p video", "5-axis stabilization", "Touchscreen", "WiFi/Bluetooth"]
    },
    {
        id: 7,
        name: "Wireless Charging Pad",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1586334831325-e8324ee5126f",
        category: "Accessories",
        brand: "ChargeIt",
        rating: 4.3,
        description: "Fast wireless charging pad compatible with Qi-enabled devices.",
        features: ["10W fast charging", "LED indicator", "Non-slip surface", "Compact design"]
    },
    {
        id: 8,
        name: "Smart Home Hub",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        category: "Smart Home",
        brand: "HomeConnect",
        rating: 4.4,
        description: "Central control for all your smart home devices with voice assistant.",
        features: ["Works with Alexa", "Zigbee/Z-Wave", "4K streaming", "Privacy controls"]
    },
    {
        id: 9,
        name: "Mechanical Gaming Keyboard",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        category: "Accessories",
        brand: "KeyMaster",
        rating: 4.5,
        description: "RGB backlit mechanical keyboard with customizable macro keys.",
        features: ["Cherry MX switches", "N-key rollover", "Braided cable", "Wrist rest"]
    },
    {
        id: 10,
        name: "Action Camera 4K",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1512790182412-b19e6d62bc39",
        category: "Cameras",
        brand: "ActionPro",
        rating: 4.7,
        description: "Rugged 4K action camera with waterproof case and image stabilization.",
        features: ["4K/60fps", "Touchscreen", "Voice control", "Live streaming"]
    }
];

// Update the renderFeaturedProducts function to show more product details
function renderFeaturedProducts() {
    featuredProductsContainer.innerHTML = '';
    
    products.forEach(product => {
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
        
        featuredProductsContainer.appendChild(productCard);
    });
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
// Cart System
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    // Dispatch event to notify other pages
    window.dispatchEvent(new Event('cartUpdated'));
}

function clearCart() {
    cart = [];
    saveCart();
    // Show feedback if on cart page
    if (document.getElementById('cart-items')) {
        renderCartItems();
        showFeedback('Your cart has been cleared');
    }
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count, #cart-count').forEach(el => {
        el.textContent = count;
    });
}

// Listen for cart updates across pages
window.addEventListener('cartUpdated', updateCartCount);

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

function showFeedback(message) {
    const feedback = document.createElement('div');
    feedback.className = 'cart-feedback';
    feedback.textContent = message;
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 300);
    }, 3000);
}

