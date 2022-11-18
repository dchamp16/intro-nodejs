const fs = require("fs");
const readline = require("readline");

/**
 * readfile
 */
// let readDataFromText = (error, data) => {
//   error
//     ? console.log(`something went wrong ${error}`)
//     : console.log(`text file: ${data}`);
// };
// fs.readFile("./fs-readfile.txt", "utf-8", readDataFromText);
// ----------------

/**
 * readline using stream (reading each line)
 * function that reads the file and fetch
 * @param file
 */
// const readFileStream = (file) => {
//   console.table(file);
// };
// const myInterFace = readline.createInterface({
//   //this create a stream to the you are reading
//   input: fs.createReadStream("./fs-readfile.txt"),
// });
// myInterFace.on("line", readFileStream);
// ----------------

// //creates empty file
// fs.open("open.txt", "w", function (err, file) {
//   if (err) throw err;
//   console.log("Saved!");
// });
// // ----------------

// //create file
// const fileError = (error) => {
//   if (error) throw error;
//   console.log("Saved!");
// };
// fs.appendFile("appendFile.txt", "Peter justine", fileError);
// // ----------------

// // create and replace a file if exist and replace the file

process.stdout.write("Whats your name? or q to quit\n");
process.stdin.on("data", (userInput) => {
  let input = userInput.toString();
  fs.writeFile("writeFile.txt", input, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
});
