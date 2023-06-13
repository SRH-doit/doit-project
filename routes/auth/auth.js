const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "public")));

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/login.html"));
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/signup.html"));
});

module.exports = router;
