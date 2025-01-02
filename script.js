const cartItems = [];
const cartList = document.getElementById("cart-items");
const totalPriceElement = document.getElementById("total-price");
const cartCount = document.getElementById("cart-count");
const shopPage = document.getElementById("shop-page");
const cartPage = document.getElementById("cart-page");
const cartLogo = document.getElementById("cart-logo");

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", (e) => {
        const product = e.target.parentElement;
        const id = product.getAttribute("data-id");
        const name = product.getAttribute("data-name");
        const price = parseFloat(product.getAttribute("data-price"));

        addToCart(id, name, price);
    });
});

cartLogo.addEventListener("click", () => {
    shopPage.style.display = "none";
    cartPage.style.display = "block";
});

document.getElementById("back-to-shop").addEventListener("click", () => {
    shopPage.style.display = "block";
    cartPage.style.display = "none";
});

function addToCart(id, name, price) {
    cartItems.push({ id, name, price });
    updateCart();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cartItems.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            ${item.name} - $${item.price}
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(li);

        total += item.price;
    });

    totalPriceElement.textContent = `Total: $${total}`;
    cartCount.textContent = cartItems.length;
}

document.getElementById("purchase-btn").addEventListener("click", () => {
    if (cartItems.length > 0) {
        alert("Purchase successful!");
        cartItems.length = 0; // Clear cart
        updateCart();
    } else {
        alert("Your cart is empty.");
    }
});
