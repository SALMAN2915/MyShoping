// Function to update cart count in the header
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-count').textContent = cart.length;
}

// Function to add item to cart
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Show modal after adding item to cart
    showAddToCartModal();
}

// Function to show the "Item Added to Cart" modal
function showAddToCartModal() {
    const modal = document.getElementById('addToCartModal');
    modal.style.display = 'block';

    // Event listener for 'Go to Cart' button
    document.getElementById('goToCartBtn').onclick = function() {
        window.location.href = 'cart.html'; // Navigate to cart page
    };

    // Event listener for 'Shop More' button
    document.getElementById('shopMoreBtn').onclick = function() {
        modal.style.display = 'none'; // Close the modal and continue shopping
    };
}

// Clear cart on page load (for index page only)
if (window.location.pathname.includes('index.html')) {
    localStorage.setItem('cart', JSON.stringify([])); // Empty cart on index page load
}

// Add event listeners to 'Add to Cart' buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(name, price); // Call addToCart function
    });
});

// Update cart count on page load
window.onload = updateCartCount;
