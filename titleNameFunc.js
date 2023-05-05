// Returns a new link element that displays the comic title and links to its page on Marvel.com
export function comicTitleName(comic) {
  // Create a new link element with alt text and a target
  const link = document.createElement("a");
  link.classList.add("comic-link");
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
