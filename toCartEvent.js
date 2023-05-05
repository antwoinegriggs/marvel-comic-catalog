export function toCart(comic, counter) {
  console.log("pass");
  // Retrieve the title, price, and quantity of the comic from the DOM
  const comicTitle = comic.title;
  // const comicSubTitle = document.querySelector(".name-second-line").textContent;
  const comicPrice = comic.prices[0].price;
  const comicQuantity = counter || 0;

  // Construct the data object to be sent in the POST request body
  const data = {
    title: comicTitle,
    // subTitle: comicSubTitle,
    price: comicPrice,
    quantity: comicQuantity,
  };

  // Make the POST request using fetch()
  fetch("http://localhost:3000/cart", {
    method: "POST",
    body: JSON.stringify(data),
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
