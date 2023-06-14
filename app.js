const express = require("express");
const path = require("path");
const fs = require("fs");
const connectDB = require("./database");
const port = 3000;

const app = express();

connectDB();

app.use(express.static(__dirname));

app.get("/404", (req, res) => {
    res.sendFile(path.join(__dirname, "/routes/topic/pages/404.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/routes/topic/pages/home.html"));
});

app.get("/:folder/:page", (req, res) => {
    const folder = req.params.folder;
    const page = req.params.page;

    const filePath = path.join(
        __dirname,
        "routes",
        folder,
        "pages",
        `${page}.html`
    );

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.redirect("/404");
        } else {
            res.sendFile(filePath);
        }
    });
});

app.get("/:page", (req, res) => {
    const page = req.params.page;

    const filePath = path.join(__dirname, "public", `${page}.html`);

    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            res.redirect("/404");
        } else {
            res.sendFile(filePath);
        }
    });
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Doit project is listening on port ${port}`);
});
