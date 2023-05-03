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

function comicTitleName(comic) {
  const link = document.createElement("a");
  link.alt = comic.name + " on Marvel.com";
  link.target = "_blank";

  const urlObject =
    comic.urls.find((urlObject) => urlObject.type === "wiki") || // or backup links if there is no wiki link for this character...
    comic.urls.find((urlObject) => urlObject.type === "detail") ||
    comic.urls.find((urlObject) => urlObject.type === "comiclink");

  link.href = urlObject.url;

  const firstLineElement = document.createElement("div");
  const secondLineElement = document.createElement("div");

  firstLineElement.classList.add("name-first-line");
  secondLineElement.classList.add("name-second-line");

  const [firstLine, secondLine] = comic.title.split(" ");

  firstLineElement.append(firstLine);
  if (secondLine) secondLineElement.append("(" + secondLine); // Don't add content to this DIV if there is no text in parentheses (see the split() above)

  link.append(firstLineElement, secondLineElement);

  return link;
}
export { renderComics };
