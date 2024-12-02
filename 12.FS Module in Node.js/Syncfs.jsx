const fs = require("fs");
const path = require("path");

const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);

// *_____________________________________________________________________

//* fs.writeFileSync(): Writes data ro a file.if the file does not exist, it will be created. if the file exists , it overwrites the content.

//! syntax: fswriteFileSync(filePath, data, options);
//? filepath: the file pathe write to.
//? data: the content to write the first.
//? option: Optional. Includes encoding (utf8), mode, or flags.
// ______________________________________________________________________

// utf-8 (short for "8-but Unicode Transformation Format") Encodes characters from nearly all written languages, symbol, and emojis.


console.log((__dirname));

const writeFile = fs.writeFileSync(
  fileName,
  "This is the initial Data, updated",
  "utf-8"
);

console.log(writeFile);

// _______________________________________________________________________

const readFile = fs.readFileSync(fileName, "utf-8");
//console.log(readFile.toString());
console.log(readFile);

// Use .toString() if working with binary data (Buffer): for example, if you need the raw binary and its string representation.

//*________________________________________________________________________
//* fs.appendFileSync(): Appends data to a file. if the first does not exist, it creates the file.
//! syntax: fs.appendFileSync(filepath, data, options);
//? filePtah: File path to append to.
//? data: Content to add to the file.
//? option: Optional. Encoding options ('utf-8).

//_________________________________________________________________________


const appendFile = fs.appendFileSync(
    fileName,
    "\nThis is the initial Data,",
    "utf-8"
  );

  console.log(appendFile);


  //*_______________________________________________________________________
  //* Delete File (fs.unlinkSync()) : Deletes a file by its path.
  //! syntax: fs,unlinksync(filePath);
  //? filePath: The path of the file to delete.
  //________________________________________________________________________

//   const fileDelete = fs.unlinkSync(filePath);
//   console.log(fileDelete);


//*_________________________________________________________________________

//* Rename File (fs.renameSync) : Renames a file form one name to another.
//! syntax: fs .renameSync(oldPath, newPath);
//? oldPath: Current file Path.
//? new Path: New file path or name.

//* ________________________________________________________________________

const newUpdatedFIleName = "updatedTest.tex";
const newFilePath = path.join(__dirname, newUpdatedFIleName)
const renameFile = fs.renameSync(filePath, newFilePath)

console.log(renameFile);

  
  

  


