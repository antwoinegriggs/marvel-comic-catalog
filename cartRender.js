const catalogContainer = document.querySelector("#catalog-container");
const cartGallery = document.createElement("div");
cartGallery.classList.add("cart-gallery");
catalogContainer.append(cartGallery);

export function cartRender(cart) {
  // Renders an array of comics as a list of comic cards in the DOM
  // Map the array of comics to an array of comic card elements
  const cartCards = cart.map((cart, index) => toCartCard(cart, index));

  // Replace the contents of the comicsContainer element with the array of comic card elements
  cartGallery.replaceChildren(...cartCards);
  // Note: replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}

function toCartCard(cart, index) {
  const cartCard = document.createElement("div");
  cartCard.classList.add("cart-card");
}
