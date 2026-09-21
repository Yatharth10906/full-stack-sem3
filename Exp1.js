const EventEmitter = require("events");

const button = new EventEmitter();

button.on("click", () => {
    console.log("Button was clicked!");
});

button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

button.emit("click");
button.emit("mouseover");


const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js events.`);
});

myEmitter.emit("greet", "Student");


console.log("1. Start of program (Synchronous)");

setTimeout(() => {
    console.log("3. Inside setTimeout (Asynchronous)");
}, 0);

setImmediate(() => {
    console.log("4. Inside setImmediate (Asynchronous)");
});

console.log("2. End of program (Synchronous)");
