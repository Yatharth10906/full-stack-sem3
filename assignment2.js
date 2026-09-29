const express = require("express");
const EventEmitter = require("events");

const app = express();
const activity = new EventEmitter();

app.use(express.static("public"));
app.use(express.json());

// Login event
activity.on("login", () => {
    console.log("Student logged successfully");
});

// Assignment event
activity.on("assign", () => {
    console.log("Assignment submitted");
});

// Logout event
activity.on("logout", () => {
    console.log("Student logged out");
});

// Exit event
activity.on("exit", () => {
    console.log("Exiting application");
});

// Receive events from frontend
app.post("/event", (req, res) => {
    activity.emit(req.body.event);
    res.json({ message: "Event executed successfully" });
});

app.listen(3000, () => {
    console.log("Student Activity Monitoring System running...");
});