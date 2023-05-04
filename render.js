const comicsContainer = document.querySelector("#comic-container");

// Renders an array of comics as a list of comic cards in the DOM
function renderComics(comics) {
  // Map the array of comics to an array of comic card elements
  const comicCards = comics.map(toComicCard);

  // Replace the contents of the comicsContainer element with the array of comic card elements
  comicsContainer.replaceChildren(...comicCards);
  // Note: replaceChildren() is our alternative to append() when we want to replace the contents of the parent element, instead of adding new elements
}

// Creates a new comic card element from a given comic object and returns it
function toComicCard(comic) {
  // Construct the URL for the comic's thumbnail image using its path and extension
  const imgURL = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

  // Create a new image element with the constructed URL
  const comicImg = document.createElement("img");
  comicImg.src = imgURL;

  // Create a new div element to hold the comic card contents and apply a class for styling
  const comicCard = document.createElement("div");
  comicCard.classList.add("comic-card");

  // Append the comic image and title to the comic card div element
  comicCard.append(comicImg);
  comicCard.append(comicTitleName(comic));

  // Return the newly created comic card element
  return comicCard;
}

// Returns a new link element that displays the comic title and links to its page on Marvel.com
function comicTitleName(comic) {
  // Create a new link element with alt text and a target
  const link = document.createElement("a");
  link.alt = comic.name + " on Marvel.com";
  link.target = "_blank";

  // Find the correct URL object for the comic's page on Marvel.com based on its type
  const urlObject =
    comic.urls.find((urlObject) => urlObject.type === "wiki") || // try to find a wiki link first
    comic.urls.find((urlObject) => urlObject.type === "detail") || // then try a detail link
    comic.urls.find((urlObject) => urlObject.type === "comiclink"); // or a comiclink link as a last resort

  // Set the link's href to the URL of the comic's page on Marvel.com
  link.href = urlObject.url;

  // Create two div elements to hold the comic title text, with classes for styling
  const firstLineElement = document.createElement("div");
  const secondLineElement = document.createElement("div");
  firstLineElement.classList.add("name-first-line");
  secondLineElement.classList.add("name-second-line");

  // Split the comic title into two parts, the first line and the second line (if present)
  const [firstLine, secondLine] = comic.title.split(" (");

  // Append the first line of the title to the first line div element
  firstLineElement.append(firstLine);

  // If there is a second line of the title (in parentheses), append it to the second line div element
  if (secondLine) {
    secondLineElement.append("(" + secondLine);
  }

  // Append the first and second line div elements to the link element
  link.append(firstLineElement, secondLineElement);

  // Return the newly created link element with the comic title text and URL
  return link;
}

export { renderComics };
