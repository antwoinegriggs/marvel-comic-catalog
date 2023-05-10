import { publicKey, privateKey } from "./config.js";

const apiBaseURL = "https://gateway.marvel.com/v1/public";

// Creates a URL for searching Marvel API for comics with titles starting with a given search term
export function createURL(search) {
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
