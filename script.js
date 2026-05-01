const products = [
    {id:1, name:"Headphones", price:2000},
    {id:2, name:"Shoes", price:1500},
    {id:3, name:"Watch", price:3000},
    {id:4, name:"T-Shirt", price:500},
    {id:5, name:"Laptop Bag", price:1200},
    {id:6, name:"Sunglasses", price:800},
    {id:7, name:"Bluetooth Speaker", price:1800},
    {id:8, name:"Mobile Stand", price:300},
    {id:9, name:"Jeans", price:1400},
    {id:10, name:"Smart Band", price:2200}
];

let cart = [];

// RENDER PRODUCTS
function renderProducts(list) {
    const grid = document.getElementById("productsGrid");

    grid.innerHTML = list.map(p => `
        <div class="card">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `).join('');
}

// ADD TO CART
function addToCart(id) {
    const item = products.find(p => p.id === id);
    cart.push(item);
    updateCart();
}

// REMOVE FROM CART
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// UPDATE CART
function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const total = document.getElementById("total");
    const count = document.getElementById("cartCount");

    cartItems.innerHTML = cart.map((item, index) => `
        <div style="display:flex; justify-content:space-between; margin-bottom:8px;">
            <span>${item.name} - ₹${item.price}</span>
            <button onclick="removeFromCart(${index})" 
                style="background:red; color:white; border:none; padding:3px 6px; cursor:pointer;">
                ❌
            </button>
        </div>
    `).join('');

    const sum = cart.reduce((a,b)=>a+b.price,0);

    total.textContent = sum;
    count.textContent = cart.length;
}

// TOGGLE CART
function toggleCart() {
    document.getElementById("cart").classList.toggle("show");
}

// SEARCH
document.getElementById("searchInput").addEventListener("input", function(){
    const val = this.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(val));
    renderProducts(filtered);
});

// INIT
renderProducts(products);