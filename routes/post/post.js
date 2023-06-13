const router = require("express").Router();
const path = require("path");

router.get("/list", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/post/list.html"));
});

router.get("/write", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/post/write.html"));
});

module.exports = router;
