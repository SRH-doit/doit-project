const router = require("express").Router();
const path = require("path");

router.get("/dice", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/game/dice.html"));
});

router.get("/seossda", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/pages/game/seossda.html"));
});

module.exports = router;
