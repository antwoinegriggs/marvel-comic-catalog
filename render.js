// Import necessary functions from other modules
import { toCart } from "./toCartEvent.js";
import { comicTitleName } from "./titleNameFunc.js";

// Get the DOM element that will contain the comic gallery
const catalogContainer = document.querySelector("#catalog-container");

// Create a new div element to hold the comic gallery and apply a class for styling
const comicGallery = document.createElement("div");
comicGallery.classList.add("comic-gallery");
catalogContainer.append(comicGallery);

function renderComics(comics) {
  // Renders an array of comics as a list of comic cards in the DOM
  const comicCards = comics.map((comic, index) =>
    createComicCard(comic, index)
  );
  comicGallery.replaceChildren(...comicCards);
}

function createComicCard(comic, index) {
  // Creates a new comic card element from a given comic object and returns it
  const imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const comicImg = document.createElement("img");
  comicImg.src = imgURL;

  const comicCard = document.createElement("div");
  comicCard.classList.add("comic-card");
  comicCard.append(comicImg);
  comicCard.append(comicTitleName(comic));

  const comicPrice = document.createElement("p");
  comicPrice.classList.add("comic-price");
  comicPrice.textContent = `${comic.prices[0].price}`;
  comicCard.append(comicPrice);

  const comicCartSettings = document.createElement("div");
  comicCartSettings.classList.add("comic-cart-settings");
  comicCard.append(comicCartSettings);

  // Initialize the comic quantity counter to 0
  let comicCounter = 0;

  // Create a subtract button and append it to the cart options div
  const subBtn = createCartButton("-", () => {
    comicCounter--;
    updateCartQuantity(comicCounter);
  });
  comicCartSettings.append(subBtn);

  // Create a paragraph element to display the cart quantity and append it to the cart options div
  const cartQuantity = document.createElement("p");
  cartQuantity.classList.add("cart-quantity");
  comicCartSettings.append(cartQuantity);
  cartQuantity.textContent = comicCounter;

  // Create an add button and append it to the cart options div
  const addBtn = createCartButton("+", () => {
    comicCounter++;
    updateCartQuantity(comicCounter);
  });
  comicCartSettings.append(addBtn);

  // Create a button to add the comic to the cart and append it to the cart options div
  const toCartBtn = document.createElement("button");
  toCartBtn.classList.add("to-cart-btn");
  toCartBtn.textContent = "Add to Cart";
  toCartBtn.setAttribute("data-id", index);
  comicCard.append(toCartBtn);
  toCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toCart(comic, comicCounter);
    return false;
  });

  function createCartButton(text, onClick) {
    //Function that creates button and event for cart settings
    const btn = document.createElement("button");
    btn.classList.add("cart-btn");
    btn.textContent = text;
    btn.addEventListener("click", onClick);
    return btn;
  }

  function updateCartQuantity(quantity) {
    //Function that updates counter
    cartQuantity.textContent = quantity;
  }

  return comicCard;
}

export { renderComics };
