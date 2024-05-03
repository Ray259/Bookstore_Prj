const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const secretkey = process.env.SECRET_KEY || "secret";

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
        sendToken(user.id, user.role, res);
        // res.redirect(process.env.CLIENT_URL);
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
        sendToken(profile.id, profile.role, res);
        //console.log(req.user);
        res.redirect(process.env.CLIENT_URL);
    })(req, res, next);
};

const sendToken = (userid, role, res) => {
    const expiration = 24 * 60 * 60;
    const token = jwt.sign({ id: userid, role: role }, secretkey, {
        expiresIn: expiration,
    });
    //console.log(jwt.verify(token, "secret"))
    res.cookie("jwt", token, { httpOnly: true, maxAge: expiration * 1000 });
};

module.exports.logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 1 });
    // res.redirect(process.env.CLIENT_URL);
};
