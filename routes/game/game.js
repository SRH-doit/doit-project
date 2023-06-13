const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "public")));

router.get("/dice", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/dice.html"));
});

router.get("/seossda", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/seossda.html"));
});

module.exports = router;
