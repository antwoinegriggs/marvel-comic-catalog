// Returns a new link element that displays the comic title and links to its page on Marvel.com
export function comicTitleName(comic) {
  // Create a new link element with alt text and a target
  const link = document.createElement("a");
  link.classList.add("comic-link");
  link.alt = `${comic.name} on Marvel.com`;
  link.target = "_blank";

  // Find the correct URL object for the comic's page on Marvel.com based on its type
  // try to find a wiki link first
  // then try a detail link
  // or a comiclink link as a last resort

  const urlObject = comic.urls.find((urlObject) =>
    ["wiki", "detail", "comiclink"].includes(urlObject.type)
  );
  link.href = urlObject.url;

  // Create two div elements to hold the comic title text, with classes for styling
  const [firstLine, secondLine] = comic.title.split(" (");
  const firstLineElement = document.createElement("div");
  firstLineElement.classList.add("name-first-line");
  firstLineElement.append(firstLine);

  // Split the comic title into two parts, the first line and the second line (if present)
  // Append the first line of the title to the first line div element
  // If there is a second line of the title (in parentheses), append it to the second line div element
  // Append the first and second line div elements to the link element

  if (secondLine) {
    const secondLineElement = document.createElement("div");
    secondLineElement.classList.add("name-second-line");
    secondLineElement.append(`(${secondLine}`);
    link.append(firstLineElement, secondLineElement);
  } else {
    link.append(firstLineElement);
  }

  return link;
}
