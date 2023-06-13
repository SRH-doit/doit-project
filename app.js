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

// app.use("/public", express.static("public"));

const topic = require("./routes/topic/topic");
app.use("/", topic);

const auth = require("./routes/auth/auth");
app.use("/auth", auth);

const game = require("./routes/game/game");
app.use("/game", game);

const post = require("./routes/post/post");
app.use("/post", post);

app.use((req, res, next) => {
    res.status("404").send("<h1>Page not found</h1>");
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`Doit project is listening on port ${port}`);
});
