window.onload = function() {
    const lastOrder = JSON.parse(localStorage.getItem('lastOrder'));

    if (lastOrder) {
        const orderDetails = document.getElementById('order-details');
        orderDetails.innerHTML = `
            <p><strong>Name:</strong> ${lastOrder.name}</p>
            <p><strong>Email:</strong> ${lastOrder.email}</p>
            <p><strong>Address:</strong> ${lastOrder.address}</p>
            <p><strong>Total:</strong> $${lastOrder.total.toFixed(2)}</p>
            <p><strong>Order Date:</strong> ${lastOrder.date}</p>
        `;
    } else {
        document.getElementById('order-details').innerHTML = "<p>No order details found.</p>";
    }
};
