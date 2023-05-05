import { toCart } from "./toCartEvent.js";
import { comicTitleName } from "./titleNameFunc.js";

// Global Variables
const catalogContainer = document.querySelector("#catalog-container");
const comicGallery = document.createElement("div");
comicGallery.classList.add("comic-gallery");
catalogContainer.append(comicGallery);

// Renders an array of comics as a list of comic cards in the DOM
function renderComics(comics) {
  // Map the array of comics to an array of comic card elements
  const comicCards = comics.map((comic, index) => toComicCard(comic, index));

  // Replace the contents of the comicsContainer element with the array of comic card elements
  comicGallery.replaceChildren(...comicCards);
  // Note: replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}

// Creates a new comic card element from a given comic object and returns it
function toComicCard(comic, index) {
  // Construct the URL for the comic's thumbnail image using its path and extension
  const imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  // Create a new image element with the constructed URL
  const comicImg = document.createElement("img");
  comicImg.src = imgURL;

  // Create a new div element to hold the comic card contents and apply a class for styling
  const comicCard = document.createElement("div");
  comicCard.classList.add("comic-card");

  // Append the comic image and title to the comic card div element
  comicCard.append(comicImg);
  comicCard.append(comicTitleName(comic));

  // Append the price to the comic card div element
  const comicPrice = document.createElement("p");
  comicPrice.classList.add("comic-price");
  comicPrice.textContent = `${comic.prices[0].price}`;
  comicCard.append(comicPrice);

  // Create a div element to hold the cart options
  const comicCartSettings = document.createElement("div");
  comicCartSettings.classList.add(`comic-cart-settings`);
  comicCard.append(comicCartSettings);

  // Comic Quantity Counter
  var comicCounter = 0;

  // Create a subtract button and append it to the cart options div
  const subBtn = document.createElement("button");
  subBtn.classList.add("subtract-btn");
  subBtn.textContent = "-";
  comicCartSettings.append(subBtn);
  subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    comicCounter -= 1;
    cartQuantity.textContent = comicCounter;
  });

  // Create a paragraph element to display the cart quantity and append it to the cart options div
  const cartQuantity = document.createElement("p");
  cartQuantity.classList.add("cart-quantity");
  comicCartSettings.append(cartQuantity);
  cartQuantity.textContent = comicCounter;

  // Create an add button and append it to the cart options div
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-btn");
  comicCartSettings.append(addBtn);
  addBtn.textContent = "+";
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    comicCounter += 1;
    cartQuantity.textContent = comicCounter;
  });

  // Create a button to add the comic to the cart and append it to the cart options div
  const toCartBtn = document.createElement("button");
  toCartBtn.classList.add(`to-cart-btn`);
  toCartBtn.textContent = "Add to Cart";
  toCartBtn.setAttribute("data-id", index);
  comicCartSettings.append(toCartBtn);
  toCartBtn.addEventListener("click", (e) => {
    e.preventDefault;
    toCart(comic, comicCounter);
  });

  // Return the newly created comic card element
  return comicCard;
}

export { renderComics };
