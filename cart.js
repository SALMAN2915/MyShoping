// Function to update cart display
function updateCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    const placeOrderBtn = document.getElementById('place-order-btn');

    // Clear existing cart items
    cartItems.innerHTML = '';

    // Calculate total price
    let total = 0;
    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    // Update total price
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;

    // Enable/Disable place order button
    placeOrderBtn.disabled = cart.length === 0;
}

// Redirect to place-order.html when "Place Order" button is clicked
document.getElementById('place-order-btn').addEventListener('click', function () {
    window.location.href = 'place-order.html'; // Navigate to the place-order page
});

// Update cart on page load
window.onload = updateCart;
