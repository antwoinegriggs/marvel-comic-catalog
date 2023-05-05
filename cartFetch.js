import { cartRender } from "./cartRender.js";
const url = "http://localhost:3000/cart";

fetch(url)
  // Parse response as JSON
  .then((response) => response.json())
  // Extract comic results from response body
  .then((cart) => {
    console.log(cart);

    cartRender(cart);
  });
