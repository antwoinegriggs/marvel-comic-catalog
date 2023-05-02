import { publicKey, privateKey } from "./key";

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// NOTE: Example characters with INVALID images: Spider-dok, Blue Marvel, Revanche, Unus
const withValidImages = (character) =>
  character.thumbnail.path.includes("image_not_available") === false &&
  character.thumbnail.path.includes("4c002e0305708") === false; // 4c002e0305708.gif is an "image not found" thumbnail
