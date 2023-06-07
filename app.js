const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const mongoURI =
  "mongodb+srv://Admin:PaRRseqABOcfNMv8@cluster0.4boiy3r.mongodb.net/doitDB?retryWrites=true&w=majority";

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
  res.sendFile(__dirname + "/pages/index.html");
});

app.use((req, res) => {
  res.sendFile(__dirname + "/pages/404.html");
});

app.listen(port, (err) => {
  if (err) return console.log(err);
  console.log(`Doit project is listening on port ${port}`);
});
