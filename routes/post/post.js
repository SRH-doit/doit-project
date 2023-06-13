const express = require("express");
const router = express.Router();
const path = require("path");

router.use(express.static(path.join(__dirname, "public")));

router.get("/list", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/list.html"));
});

router.get("/write", (req, res) => {
    res.sendFile(path.join(__dirname, "/pages/write.html"));
});

module.exports = router;
