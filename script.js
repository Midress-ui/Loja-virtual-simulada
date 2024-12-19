let cart = [];
const products = [
    { id: 1, name: "Produto 1", price: 50.0 },
    { id: 2, name: "Produto 2", price: 80.0 },
    { id: 3, name: "Produto 3", price: 120.0 },
];

document.querySelectorAll(".add-to-cart").forEach(button => {
    button.addEventListener("click", event => {
        const productId = event.target.closest(".product").dataset.id;
        const product = products.find(p => p.id == productId);
        cart.push(product);
        updateCart();
    });
});

document.getElementById("cart-btn").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "flex";
    renderCart();
});

document.getElementById("close-cart").addEventListener("click", () => {
    document.getElementById("cart-modal").style.display = "none";
});

function updateCart() {
    document.getElementById("cart-btn").innerText = `🛒 Carrinho (${cart.length})`;
}

function renderCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    document.getElementById("cart-total").innerText = total.toFixed(2);
}
