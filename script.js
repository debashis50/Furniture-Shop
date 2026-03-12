//Menu icon
let menuIcon = document.getElementById("menuIcon");
let categoryMenu = document.getElementById("categoryMenu");

menuIcon.addEventListener("click", function(){
    categoryMenu.classList.toggle("hide");
});

// ----- PROFESSIONAL CART SYSTEM -----

// Get cart count element
let cartCount = document.getElementById("cartCount");

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Update cart count on page load
updateCartCount();

// Add to Cart Buttons
let addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function(btn){
    btn.addEventListener("click", function(){
        let productDiv = btn.closest(".product");
        let productName = productDiv.dataset.name;
        let productPrice = parseFloat(productDiv.dataset.price);
        let productImage = productDiv.dataset.image;

        // Check if product already in cart
        let existingProduct = cart.find(p => p.name === productName);
        if(existingProduct){
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: productName,
                price: productPrice,
                image: productImage,
                quantity: 1
            });
        }

        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Update cart count
        updateCartCount();

        alert(`${productName} added to cart!`);
    });
});

// Function to update cart count
function updateCartCount(){
    let totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalQuantity;
}

// Shop Now Button
document.getElementById("shopBtn").addEventListener("click", function() {
    alert("Welcome to Udvob Furniture! Explore our products.");
});

// Buy Now Buttons
let buttons = document.querySelectorAll(".buy-btn");

buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        alert("Product added to your interest list!");
    });
});

// Contact Form Message
let form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
});