const { error } = require("console");
const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// Why .then() and .catch()?
// .then() ensure clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling , making it easy to debug and manage failure.

fs.promises
  .readdir(filePath)
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
