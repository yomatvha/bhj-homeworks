"use strict"

let incs = document.querySelectorAll('.product__quantity-control_inc');
let decs = document.querySelectorAll('.product__quantity-control_dec');

incs.forEach((incButton) => {
  incButton.addEventListener("click", () => {
    let amnt = incButton.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    amnt.textContent = (Number(amnt.textContent) + 1).toString();
  })
});

decs.forEach((decButton) => {
  decButton.addEventListener("click", () => {
    let amnt = decButton.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (Number(amnt.textContent) > 1) {
      amnt.textContent = (Number(amnt.textContent) - 1).toString();
    }
  })
});

let adds = document.querySelectorAll('.product__add');
let cart = document.querySelector('.cart__products');

adds.forEach((addButton) => {
  addButton.addEventListener("click", () => {
    let prod = addButton.closest('.product');
    let img = prod.querySelector('.product__image').getAttribute('src');
    let prodId = prod.getAttribute('data-id');
    let amnt = prod.querySelector('.product__quantity-value').textContent;
    let cartProducts = Array.from(cart.querySelectorAll('.cart__product'));

    function addProductInCart() {
      cart.insertAdjacentHTML("beforeend",
        '<div class="cart__product" data-id="' + prodId + '"><div class="task__title">'
        + '<img class="cart__product-image" src="' + img + '">'
        + '<div class="cart__product-count">' + amnt + '</div></div>'
      );
    }

    if (cartProducts.length > 0) {
      let productInCart = cartProducts.find(item => item.getAttribute('data-id') == prodId);
      if (productInCart) {
        let cnt = productInCart.querySelector('.cart__product-count').textContent;
        productInCart.querySelector('.cart__product-count').textContent = (Number(cnt) + Number(amnt)).toString();
      } else {
        addProductInCart();
      }
    } else {
      addProductInCart();
    }
  })
});
