const cart = document.querySelector("#cart");
const items = document.querySelector("#items");

items.addEventListener("click", addToCart);

let counter = 0;

function addToCart(event) {
  console.log(event.target);

  if (event.target.textContent === "Карзина") {
    counter++;
    cart.textContent = counter;
  }
}

const arrow_left = document.querySelector("#arrow-left");
const arrow_right = document.querySelector("#arrow-right");
const card = document.querySelectorAll("#arta_product");

arrow_left.addEventListener("click", moveLeft);
arrow_right.addEventListener("click", moveRight);

const array_of_cards = [
  `<div class="product_carta">
            <i id="arrow-left" class="bi bi-arrow-bar-left"></i>
            <div id="arta_product" class="carta_product">
              <img
                class="product_img"
                src="img/Сеты/Императорский Cет.jpg"
              />
              <h5 class="product_h5">Императорский Cет</h5>
              <samp class="product_name_product">30 шт. | 915 гр.</samp>
              <span class="product_sena">35 сомони</span>
             <div class="content">
            <button class="glow-on-hover" type="button"><i class="bi bi-cart2"></i>Карзина</button>
          </div>
            </div>`,
  `<div  id="arta_product" class="carta_product">
              <img class="product_img" src="img/Сеты/Классика Сет.jpg" />
              <h5 class="product_h5">Классика Сет</h5>
              <samp class="product_name_product">30 шт. | 915 гр.</samp>
              <span class="product_sena">35 сомони</span>
              <div class="content">
              <button class="glow-on-hover" type="button"><i class="bi bi-cart2"></i>Карзина</button>
          </div>
            </div>`,
  `<div id="arta_product" class="carta_product">
              <img class="product_img" src="img/Сеты/Токио Cет.jpg" />
              <h5 class="product_h5">Токио Cет</h5>
              <samp class="product_name_product">30 шт. | 915 гр.</samp>
              <span class="product_sena">35 сомони</span>
              <div class="content">
            <button id="iteams" class="glow-on-hover" type="button"><i class="bi bi-cart2"></i>Карзина</button>
          </div>
            </div>`,
  `<div id="arta_product" class="carta_product">
              <img
                class="product_img"
                src="img/Сеты/Филабум Cет.jpg"
              />
              <h5 class="product_h5">Филабум Cет</h5>
              <samp class="product_name_product">30 шт. | 915 гр.</samp>
              <span class="product_sena">35 сомони</span>
              <div class="content">
            <button class="glow-on-hover" type="button"><i class="bi bi-cart2"></i>Карзина</button>
          </div>
          </div>`,
];

arta_product.innerHTML = array_of_cards.join("");

let index = 0;

function moveLeft() {
  arta_product.innerHTML = "";

  for (let i = 0; i < 3; i++)
    arta_product.innerHTML += array_of_cards[(index + i) % 4];

  index++;
  index %= 4;
}

function moveRight() {
  console.log(arta_product, "right");
}
