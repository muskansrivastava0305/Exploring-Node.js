// const { error } = require("console");
const fs = require("fs");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);

// Why .then() and .catch()?
// .then() ensure clear chaining of multiple asynchronous operations.
// .catch() centralizes error handling , making it easy to debug and manage failure.

// const file = __dirname;
// fs.promises
//   .readdir(file)
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

const filePath1 = __dirname;

fs.promises
  .readdir(filePath1)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// ____________________________________________________________________________
// Create (Write a File): fs.promises.writefile
//Create or overwise a file with specified content.
// The writeFile() method writes data to a file asynchronously.
// If the file does not exist, it created.
//If it exists, its content is replaced.

//? syntax: fs.promises.writeFile(path, data, options).then().catch();
//? path: path to the file.
//? data: Content to write.
//? options: Encoding (utf-8), flags, etc. (optional).
//_____________________________________________________________________________

fs.promises.writeFile(filePath, "this is the initial data" , "utf-8")
.then(console.log("file created successfully"))
.catch((err) => console.log(err));

//! syntax: fs.promises.readFile(path, options). then (data => ...).catch(err => ...);
//? pATH: path to the file.
//? options : Encoding ('utf8) or no encoding for binary data.

//______________________________________________________________________________

fs.promises.readFile(filePath , "utf-8")
.then((data) => console.log(data))
.catch((err) => console.error("Error reading file:", err));



