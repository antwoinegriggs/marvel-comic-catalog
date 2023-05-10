import { searchMarvelAPI } from "./main.js";
const DEFAULT_SEARCH_TERM = "avenger";

// Run a search once on page load (before the user gets a chance to enter a new search term),
// so that the page starts with some characters already displayed:
searchMarvelAPI(DEFAULT_SEARCH_TERM);

// Handle search form submissions...

function initSearch() {
  document.querySelector("#search-form").addEventListener("submit", (event) => {
    // Prevent the form from doing its default behavior of refreshing the page.
    event.preventDefault();
    const searchTerm =
      event.target.elements.search.value || DEFAULT_SEARCH_TERM;
    searchMarvelAPI(searchTerm);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  console.log("pass");
  initSearch();
});
