const express = require("express");
const app = express();
const port = 3000;

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

app.use((req, res) => {
    res.sendFile(__dirname + "/pages/404.html");
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Doit project is listening on port ${port}`);
});
