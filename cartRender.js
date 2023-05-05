const catalogContainer = document.querySelector("#catalog-container");
const cartGallery = document.createElement("div");
cartGallery.classList.add("cart-gallery");
catalogContainer.append(cartGallery);

let totalCart = 0;

export function cartRender(cart) {
  // Renders an array of comics as a list of comic cards in the DOM
  // Map the array of comics to an array of comic card elements
  const cartCards = cart.map(toCartCard);

  // Replace the contents of the comicsContainer element with the array of comic card elements
  cartGallery.replaceChildren(...cartCards);
  // Note: replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}
const multiply = (x, y) => Number(x) * Number(y);

function toCartCard(cart) {
  const cartCard = document.createElement("div");
  cartCard.classList.add("cart-card");

  const comicTitle = document.createElement("div");
  comicTitle.classList.add("cart-comic-title");
  comicTitle.textContent = cart.title;
  console.log(comicTitle);
  cartCard.append(comicTitle);

  const comicPrice = document.createElement("div");
  comicPrice.classList.add("cart-comic-price");
  comicPrice.textContent = cart.price;
  console.log(comicPrice);
  cartCard.append(comicPrice);

  const comicQuantity = document.createElement("div");
  comicQuantity.classList.add("cart-comic-quantity");
  comicQuantity.textContent = cart.quantity;
  console.log(comicQuantity);
  cartCard.append(comicQuantity);

  const subtotal = document.createElement("div");
  subtotal.classList.add("subtotal");
  let total = multiply(cart.price, cart.quantity);
  totalCart += Math.round(total * 1000) / 1000;
  subtotal.textContent = multiply(cart.price, cart.quantity);
  console.log(subtotal);
  cartCard.append(subtotal);
  cartGallery.append(cartCard);

  console.log(totalCart);
  return cartCard;
}
console.log(totalCart);
