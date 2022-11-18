const events = require("events");
const buffer = require("buffer");

/**
 * event
 */
function name(value) {
  return console.log(`Hello ${value}`);
}
const myEmmiter = new events.EventEmitter();
myEmmiter.on("person", name);
myEmmiter.emit("person", "Peter");
// ----------------

/**
 * user input
 */
// const userInput = (data) => {
//   let input = data.toString();
//   console.log("your name is: " + input);
// };
// process.stdout.write("What is your name?\n");
// process.stdin.on("data", userInput);
// ----------------
