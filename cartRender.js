const cartGallery = document.querySelector("#cart-gallery");

let totalCart = 0;
// const multiply = (x, y) => Number(x) * Number(y);

function toCartCard(cart) {
  let cartCard = document.createElement("div");
  let cartQuantity = cart.quantity;
  cartCard.className = "cart-card";
  cartCard.innerHTML = `
  <div class="cart-content">
  <h4>${cart.title}</h4>
  <p>${cart.price}</p>
  </div>
<div class="cart-settings">
<button class="sub-cart-btn"> - </button>
<p class="cart-quantity">${cartQuantity}</p>
<button class="add-cart-btn"> + </button>
</div>
<p class="subtotal"></p>
<button class="remove-cart"> Remove </button>
  `;
  const cartQuantityElement = cartCard.querySelector(".cart-quantity");
  const subtractButton = cartCard.querySelector(".sub-cart-btn");
  subtractButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (cart.quantity !== 1) {
      cart.quantity -= 1;
      cartQuantityElement.textContent = cart.quantity;
      patchRequest(cart);
    } else {
      cartCard.remove();
      deleteRequest(cart);
    }
  });

  const addButton = cartCard.querySelector(".add-cart-btn");
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    cart.quantity += 1;
    cartQuantityElement.textContent = cart.quantity;
    patchRequest(cart);
  });

  const removeCart = cartCard.querySelector(".remove-cart");
  removeCart.addEventListener("click", (e) => {
    e.preventDefault();
    cartCard.remove();
    deleteRequest(cart);
  });

  // const subtotal = document.querySelector(".subtotal");
  // let total = multiply(cart.price, cart.quantity);
  // totalCart += Math.round(total * 1000) / 1000;
  // subtotal.textContent = multiply(cart.price, cart.quantity);
  // console.log(subtotal);

  cartGallery.append(cartCard);
}

export function cartRender(data) {
  cartGallery.innerHTML = "";
  data.forEach((cart) => toCartCard(cart));
}

//   return cartCard;
// }
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
}

function deleteRequest(cart) {
  fetch(`http://localhost:3000/cart/${cart.id}`, {
    method: "DELETE",
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
}
