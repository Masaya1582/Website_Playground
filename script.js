const products = [
    { name: "Product 1", price: 10, image: "product1.jpg" },
    // Add more products here
];

const cart = [];

const productContainer = document.querySelector(".product-list");
const cartContainer = document.querySelector(".cart");
const cartItemsList = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cart-total");

// Display products
function displayProducts() {
    productContainer.innerHTML = "";
    products.forEach((product, index) => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button class="add-to-cart" data-index="${index}">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
}

// Add product to cart
function addToCart(index) {
    const product = products[index];
    cart.push(product);
    displayCart();
}

// Display cart
function displayCart() {
    cartItemsList.innerHTML = "";
    let total = 0;
    cart.forEach((product) => {
        const cartItem = document.createElement("li");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <span>${product.name}</span>
            <span>$${product.price}</span>
            <button class="remove-from-cart" data-product="${product.name}">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);
        total += product.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

// Handle add to cart button clicks
productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const index = e.target.getAttribute("data-index");
        addToCart(index);
    }
});

// Handle remove from cart button clicks
cartItemsList.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart")) {
        const productName = e.target.getAttribute("data-product");
        const productIndex = cart.findIndex((product) => product.name === productName);
        if (productIndex !== -1) {
            cart.splice(productIndex, 1);
            displayCart();
        }
    }
});

// Initialize the page
displayProducts();
