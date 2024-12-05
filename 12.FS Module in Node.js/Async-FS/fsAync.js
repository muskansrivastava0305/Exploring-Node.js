const fs = require("fs");
const path = require("path");

const fileName = "fsAsync.txt";
const filePath = path.join(__dirname, fileName)

//*___________________________________________________________________

// * fs.writeFIle(): writes data to a file , replacing the file if it already exists.
//! syntax: fs.writefile(path, data, options, callback);

//? path: File path to write to.
//? data: Content to write.
//? options: Optional. Specific encoding ('utf8) , mode , or flag.
//? callback : A function with an err parameter.

//*___________________________________________________________________

fs.writeFile(filePath, "This is the initial Data" , "utf-8", (err) => {
    if (err) console.error(err);
    else console.log("File has been Saved");
});

// ___________________________________________________________________
// fs.readFile(): Reads the contents of a file asynchronous and returns the data as a buffer to string
// syntax: fs.readFile(path, option , callback);
// path: File path to read from.
// optional. An object or string specifying the encoding ('utf-8) or flag ('r' for reading).
// callback: A function with parameters (err, data).
// ___________________________________________________________________

fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) console.error(err);
    else console.log(data);
});

// ___________________________________________________________________

//* fs.appendFile(): Appends data to a file. If the file doest'n exist, it is created .
//! syntax: fs.appendfile(path,data, options, callback);
//____________________________________________________________________

fs.appendFile(filePath, "\nThis is the initial Data" , "utf-8", (err) => {
    if (err) console.error(err);
    else console.log("File has been Saved");
});

// ___________________________________________________________________

// fs.unlink(): Deletes a file asynchronously.
// syntax: fs.unlink(path, callback);

// ___________________________________________________________________


// fs.unlink(filePath, (err) => {
//     if (err) console.error(err);
//     else console.log("File has been Saved");
// });
