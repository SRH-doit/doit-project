const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/User");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { email, password, name } = req.body;

    try {
        // const existingUser = await User.findOne({ email });
        // console.log(existingUser);
        // if (existingUser) {
        //     return res
        //         .status(400)
        //         .json({ message: "이미 가입된 이메일입니다." });
        // }
        console.log(password);
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hashedPassword, name });
        await user.save();

        const token = jwt.sign({ userId: user._id }, "doitisgoat");

        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "서버 에러" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res
                .status(400)
                .json({ error: "이메일이 유효하지 않습니다." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign({ userId: user._id }, "doitisgoat");

        res.json({ token });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "서버 에러" });
    }
});

module.exports = router;
