const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const mongoURI =
    "mongodb+srv://admin:PaRRseqABOcfNMv8@cluster0.4boiy3r.mongodb.net/doitDB?retryWrites=true&w=majority";

mongoose
    .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB Atlas connected");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB Atlas:", err);
    });

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/pages/index.html");
});

app.get((req, res) => {
    res.sendFile(__dirname + "/public/pages/404.html");
});

const auth = require("./routes/auth");
app.use("/auth", auth);

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Doit project is listening on port ${port}`);
});
