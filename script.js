//Menu icon
let menuIcon = document.getElementById("menuIcon");
let categoryMenu = document.getElementById("categoryMenu");

menuIcon.addEventListener("click", function(){
    categoryMenu.classList.toggle("hide");
});

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