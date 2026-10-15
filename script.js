const bagButton = document.querySelector(".bag-button");
const cartItems = document.querySelector(".cart-items");
let counter = (cartItems.textContent = 0);

bagButton.addEventListener("click", () => {
  cartItems.innerHTML = counter++;
});
