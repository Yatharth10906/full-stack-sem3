const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "example.txt");

fs.writeFile(filePath, "Hello! This is a simple file system experiment in Node.js.\n", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully!");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:\n" + data);
    });
});
