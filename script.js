const cartBtn = document.querySelector(".cart-btn");
const closedCartBtn = document.querySelector(".closed-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productsDOM = document.querySelector(".products-center");

// cart
let cart = [];

// getting the products
class Products {
  async getProducts() {
    try {
      let res = await fetch("products.json");
      let data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

// display prodcuts
class UI {}

// local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // get all products
  products.getProducts().then((data) => console.log(data));
});
