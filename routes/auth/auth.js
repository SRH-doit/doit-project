const router = require("express").Router();
const path = require("path");

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/auth/login.html"));
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/auth/signup.html"));
});

module.exports = router;
