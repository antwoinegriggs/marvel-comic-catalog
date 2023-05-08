<h1>Marvel Comic Book Catalog Search</h1>

<h2>Description</h2>
This project is a catalog search for Marvel comic books, which allows users to browse and search for comics by title or character. The project was built using JavaScript, HTML, and CSS, and uses the Marvel Comics API (https://developer.marvel.com/) to retrieve data about comic books.

The project includes CRUD functionality, allowing users to add, remove, and update quantities of comics in a shopping cart. The cart data is stored via a custom API that is included with the project.

To function properly, this project requires the md5.js library and a private Marvel API key. The md5.js library is included in the project files, but users will need to obtain their own Marvel API key in order to use the project.

<h2>Installation</h2>
<p>To install this project, follow these steps:</p>

1. Clone the project repository to your local machine.
2. Open the project directory in your preferred code editor.
3. Install the md5.js library by running the command npm install md5 in your terminal.
4. Obtain a private Marvel API key by creating an account at https://developer.marvel.com/.
5. Store your Marvel API key in a file named key.js at the root of the project directory, using the following format:

const publicKey = [your public key];<br>
const privateKey = [your private key];<br>
export { publicKey, privateKey };<br>

6. Run the project by opening the index.html file in your preferred web browser.

<h2>Usage</h2>
<p>To use this project, follow these steps:</p>

1. Open the project in your web browser by opening the index.html file.
2. Use the search bar to search for comics by title, author, or character.
3. Click on a comic to view its details.
4. Use the "Add to Cart" button to add a comic to your shopping cart.
5. Use the "Remove" button to remove a comic from your cart, or use the "Update" button to change the quantity of a comic in your cart.

<h2>API Key</h2>
<p>To obtain a private Marvel API key, follow these steps:</p>

1. Create an account at https://developer.marvel.com/.
2. Navigate to your account dashboard.
3. Under "My Developer Account", click on "Create a New App".
4. Fill out the required information and click "Create".
5. Your public and private keys will be displayed on the next screen.
