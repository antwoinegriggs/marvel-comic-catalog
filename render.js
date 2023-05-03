const comicsContainer = document.querySelector("#comic-container");

function renderComics(comics) {
  const comicCards = comics.map(toComicCard);
  comicsContainer.replaceChildren(...comicCards); // replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}

function toComicCard(comic) {
  const imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
  const comicImg = document.createElement("img");
  comicImg.src = imgURL;

  const comicCard = document.createElement("div");
  comicCard.classList.add("comic-card");

  comicCard.append(comicImg);
  comicCard.append(comicTitleName(comic));

  return comicCard;
}

export { renderComics };
