const comicsContainer = document.querySelector("#comic-container");

function renderComics(comics) {
  const comicCards = comics.map(toComicCard);
  comicsContainer.replaceChildren(...comicCards); // replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}

export { renderComics };
