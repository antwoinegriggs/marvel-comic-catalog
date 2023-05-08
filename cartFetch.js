import { cartRender } from "./cartRender.js";
const url = "http://localhost:3000/cart";

fetch(url)
  .then((response) => response.json())
  .then((cart) => {
    console.log(cart);
    cartRender(cart);
  });
