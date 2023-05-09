export function toCart(comic, counter) {
  const { title, prices } = comic;
  const price = prices[0].price;
  const quantity = counter || 0;
  if (quantity !== 0) {
    const data = { title, price, quantity };
    fetch("http://localhost:3000/cart", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((data) => data)
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
    console.log("success");
  } else {
    console.log("Nothing to add");
  }
}
