import { publicKey, privateKey } from "./key.js";

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Function that creates the URL that takes a parameter to search
function createURL(search) {
  const ts = Date.now();
  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey),
    titleStartsWith: search,
    limit: 100,
  });
  const endpoint = `${apiBaseURL}/comics?`; // Notice the question mark to start the query parameters.
  const url = endpoint + params;
  return url;
}

function searchMarvelAPI(search) {
  const url = createURL(search);
  fetch(url)
    .then((response) => response.json())
    .then((body) => {
      console.log(body.data.results);
      const matchedComics = body.data.results;
      const comicsWithImages = matchedComics.filter(withValidImages);
      console.log(body.data.results[0].prices[0]);
      const comicsWithPrices = comicsWithImages.filter(withValidPrices);
      console.log(comicsWithPrices);
    });
}

searchMarvelAPI("spider");
// NOTE: Example characters with INVALID images: Spider-dok, Blue Marvel, Revanche, Unus
const withValidImages = (comics) =>
  comics.thumbnail.path.includes("image_not_available") === false &&
  comics.thumbnail.path.includes("4c002e0305708") === false; // 4c002e0305708.gif is an "image not found" thumbnail

function withValidPrices(comics) {
  const hasValidPrices = comics.prices.every(
    (price) => !price.price.toString().includes("0")
  );
  return hasValidPrices;
}
