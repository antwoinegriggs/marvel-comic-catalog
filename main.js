import { publicKey, privateKey } from "./key.js";
import { renderComics } from "./render.js";

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Returns true if the comic has a valid image
const withValidImages = (comics) =>
  comics.thumbnail.path.includes("image_not_available") === false &&
  comics.thumbnail.path.includes("4c002e0305708") === false; // 4c002e0305708.gif is an "image not found" thumbnail

// Returns true if the comic has valid prices
function withValidPrices(comics) {
  // Check if every price in the comic has a non-zero price
  const hasValidPrices = comics.prices.every(
    (price) => !price.price.toString().includes("0")
  );
  return hasValidPrices;
}

// Creates a URL for searching Marvel API for comics with titles starting with a given search term
function createURL(search) {
  // Get the current timestamp
  const ts = Date.now();

  // Create a new URLSearchParams object and set the necessary query parameters
  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey), // Generate hash for authentication
    titleStartsWith: search,
    limit: 100, // Set the maximum number of results to be returned
  });

  // Construct the endpoint URL for searching comics with the query parameters
  const endpoint = `${apiBaseURL}/comics?`; // Notice the question mark to start the query parameters.

  // Combine the endpoint URL with the query parameters to form the complete API request URL
  const url = endpoint + params;

  // Return the complete API request URL
  return url;
}

function searchMarvelAPI(search) {
  // Create URL for the Marvel API search
  const url = createURL(search);

  // Fetch data from the Marvel API using the URL
  fetch(url)
    // Parse response as JSON
    .then((response) => response.json())
    // Extract comic results from response body
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

export { searchMarvelAPI };
