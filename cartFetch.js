const url = "http://localhost:3000/cart";

fetch(url)
  // Parse response as JSON
  .then((response) => response.json())
  // Extract comic results from response body
  .then((body) => {
    console.log(body.data.results);
  });
