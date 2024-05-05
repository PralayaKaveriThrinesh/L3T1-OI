let cartItems = [];

function addToCart(itemName, itemPrice) {
    const item = { name: itemName, price: itemPrice };
    cartItems.push(item);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = <span>${item.name}</span><span>$${item.price}</span><button onclick="removeFromCart('${item.name}')">Remove</button>;
        cartList.appendChild(li);
    });
}

function removeFromCart(itemName) {
    cartItems = cartItems.filter(item => item.name !== itemName);
    updateCart();
}

function checkout() {
    // Implement checkout logic (e.g., redirect to checkout page, send order to server, etc.)
    alert('Thank you for your order!');
    cartItems = [];
    updateCart();
}
