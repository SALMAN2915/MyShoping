document.getElementById('order-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) return; // No items to order

    // Collect user details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Create order object
    const order = {
        name: name,
        email: email,
        address: address,
        total: cart.reduce((acc, item) => acc + item.price, 0),
        date: new Date().toLocaleString()
    };

    // Save order in localStorage
    localStorage.setItem('lastOrder', JSON.stringify(order));

    // Clear cart
    localStorage.setItem('cart', JSON.stringify([]));

    // Construct the WhatsApp message
    const message = `*New Order Placed!*\n\n` +
                    `*Name:* ${order.name}\n` +
                    `*Email:* ${order.email}\n` +
                    `*Address:* ${order.address}\n` +
                    `*Total:* $${order.total.toFixed(2)}\n` +
                    `*Order Date:* ${order.date}\n\n` +
                    `Please process the order accordingly.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (without + or country code)
    const phoneNumber = '+917518240401'; // Replace with your number

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp (this will open in a new tab)
    window.open(whatsappUrl, '_blank');

    // Redirect to the confirmation page
    window.location.href = 'order-confirmation.html'; // Navigate to order confirmation page
});
