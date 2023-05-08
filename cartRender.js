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
  cartGallery.append(cartCard);

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

  const editCart = document.createElement("div");
  editCart.classList.add("edit-cart");
  cartCard.append(editCart);

  // Create a subtract button and append it to the cart options div
  const subBtn = document.createElement("button");
  subBtn.classList.add("sub-cart-btn");
  subBtn.textContent = "-";
  editCart.append(subBtn);
  subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.stop();
    cart.quantity -= 1;
    cartQuantity.textContent = cart.quantity;
    patchRequest(cart);
    return false;
  });

  const cartQuantity = document.createElement("div");
  cartQuantity.classList.add("cart-comic-quantity");
  cartQuantity.textContent = cart.quantity;
  console.log(cartQuantity);
  editCart.append(cartQuantity);

  // Create an add button and append it to the cart options div
  const addBtn = document.createElement("button");
  addBtn.classList.add("add-cart-btn");
  editCart.append(addBtn);
  addBtn.textContent = "+";
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.stop();
    cart.quantity += 1;
    cartQuantity.textContent = cart.quantity;
    patchRequest(cart);
    return false;
  });

  const removeCart = document.createElement("button");
  removeCart.classList.add("remove-cart-btn");
  removeCart.textContent = "Remove";
  cartCard.append(removeCart);
  removeCart.addEventListener("click", (e) => {
    e.preventDefault();
    window.stop();
    cartCard.remove();

    deleteRequest(cart);
  });

  const subtotal = document.createElement("div");
  subtotal.classList.add("subtotal");
  let total = multiply(cart.price, cart.quantity);
  totalCart += Math.round(total * 1000) / 1000;
  subtotal.textContent = multiply(cart.price, cart.quantity);
  console.log(subtotal);
  cartCard.append(subtotal);

  console.log(totalCart);
  return cartCard;
}
console.log(totalCart);

function patchRequest(cart) {
  // Make the POST request using fetch()
  fetch(`http://localhost:3000/cart/${cart.id}`, {
    method: "PATCH",
    body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  console.log("success");
}

function deleteRequest(cart) {
  // Make the POST request using fetch()
  fetch(`http://localhost:3000/cart/${cart.id}`, {
    method: "DELETE",
    //   body: JSON.stringify(cart),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
  console.log("success");
}
