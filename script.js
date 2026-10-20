const cartBtn = document.querySelector(".cart-btn");
const closedCartBtn = document.querySelector(".close-cart");
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
      let products = data;

      products = products.map((item) => {
        const { title, brand, price, id, image, stock, category } = item;
        return { title, brand, price, id, image, stock, category };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

// display prodcuts
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
           <!-- single product -->
          <article class="product">
            <div class="img-container">
              <img
                src=${product.image}
                alt="product"
                class="product-img"
              />
              <button class="bag-btn" data-id=${product.id}>
                <i class="fas fa-shopping-cart"></i>
                Add to bag
              </button>
            </div>
            <h3>${product.brand.toUpperCase()}<br>${product.title}</h3>
            <h4>$${product.price}</h4>
          </article>
          <!-- end of single product -->
      `;
    });
    productsDOM.innerHTML = result;
  }
}

// local storage
class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  // get all products
  products.getProducts().then((products) => ui.displayProducts(products));
});
