import { createURL } from "./url.js";
import { renderComics } from "./render.js";

// Returns true if the comic has a valid image
const withValidImages = (comics) =>
  !comics.thumbnail.path.includes("image_not_available") &&
  !comics.thumbnail.path.includes("4c002e0305708"); // 4c002e0305708.gif is an "image not found" thumbnail

// Returns true if the comic has valid prices
const withValidPrices = (comics) =>
  comics.prices.every((price) => !price.price.toString().includes("0"));

export function searchMarvelAPI(search) {
  // Create URL for the Marvel API search
  const url = createURL(search);

  // Fetch data from the Marvel API using the URL
  fetch(url)
    .then((response) => response.json())
    .then((body) => {
      console.log(body.data.results);
      const matchedComics = body.data.results;

      // Filter comics with valid images
      const comicsWithImages = matchedComics.filter(withValidImages);

      // Filter comics with valid prices
      const comicsWithPrices = comicsWithImages.filter(withValidPrices);
      console.log(comicsWithPrices);

      // Render filtered comics using the renderComics function
      renderComics(comicsWithPrices);
    });
}
