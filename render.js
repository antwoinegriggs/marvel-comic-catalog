import { toCart } from "./toCartEvent.js";

const comicGallery = document.querySelector("#comic-gallery");

function createComicCard(comic) {
  let comicCard = document.createElement("div");
  let cartQuantity = 0;
  comicCard.className = "comic-card";
  comicCard.innerHTML = `
  <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}">
  <div class="content">
  <h2>${comic.title}</h2>
  <p>${comic.prices[0].price}</p>
  </div>
<div class="cart-settings">
<button class="subtract-button"> - </button>
<p class="quantity">${cartQuantity}</p>
<button class="add-button"> + </button>
</div>
<button class="add-to-cart"> Add To Cart </button>
  `;

  const subtractButton = comicCard.querySelector(".subtract-button");
  subtractButton.addEventListener("click", () => {
    if (cartQuantity !== 0) {
      const cartQuantityElement = comicCard.querySelector(".quantity");
      cartQuantity -= 1;
      cartQuantityElement.textContent = cartQuantity;
    }
  });

  const addButton = comicCard.querySelector(".add-button");
  addButton.addEventListener("click", () => {
    const cartQuantityElement = comicCard.querySelector(".quantity");
    cartQuantity += 1;
    cartQuantityElement.textContent = cartQuantity;
  });

  const addToCart = comicCard.querySelector(".add-to-cart");
  addToCart.addEventListener("click", (e) => {
    e.preventDefault();
    toCart(comic, cartQuantity);
    return false;
  });

  comicGallery.append(comicCard);
}

export function renderComics(comics) {
  comicGallery.innerHTML = "";
  comics.forEach((comic) => createComicCard(comic));
}
