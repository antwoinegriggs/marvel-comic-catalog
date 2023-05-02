import { publicKey, privateKey } from "./key";

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Function that creates the URL that takes a parameter to search
function createURL(search) {
  const ts = Date.now();
  const params = new URLSearchParams({
    ts: ts,
    apikey: publicKey,
    hash: md5(ts + privateKey + publicKey),
    nameStartsWith: search,
    limit: 100,
  });
  const endpoint = `${apiBaseURL}/characters?`; // Notice the question mark to start the query parameters.
  const url = endpoint + params;
  return url;
}

// NOTE: Example characters with INVALID images: Spider-dok, Blue Marvel, Revanche, Unus
const withValidImages = (character) =>
  character.thumbnail.path.includes("image_not_available") === false &&
  character.thumbnail.path.includes("4c002e0305708") === false; // 4c002e0305708.gif is an "image not found" thumbnail
