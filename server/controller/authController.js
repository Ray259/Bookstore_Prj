const bcrypt = require("bcrypt");
const { User } = require("../models");
const sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const passport = require("passport");

module.exports.register = async (req, res) => {
    const { email, password, name, phone } = req.body;
    const t = await User.findOne({ where: { email: email } });
    if (t) {
        return res.status(400).send("Email is already registered.");
    } else {
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({
            email: email,
            password: hashed,
            name: name,
            phone: phone,
        });
        res.json(user);
    }
};

module.exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).send("Invalid email or password.");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid email or password.");
    } else {
        sendToken(user.id, res);
    }
};

module.exports.authenticateGoogle = passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/userinfo.email",
    ],
    session: false,
});

module.exports.googleCallback = (req, res, next) => {
    passport.authenticate("google", (err, profile) => {
        if (err) {
            return next(err);
        }
        req.user = profile;
        sendToken(profile.id, res);
        console.log(req.user);
        res.redirect("http://localhost:3000");
    })(req, res, next);
};

const sendToken = (userid, res) => {
    const expiration = 3600;
    const token = jwt.sign({ id: userid }, "secret", {
        expiresIn: expiration,
    });
    res.cookie("jwt", token, { httpOnly: true, maxAge: expiration * 1000 });
};
