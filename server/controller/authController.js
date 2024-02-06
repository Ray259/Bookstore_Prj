const bcrypt = require("bcrypt");
const { User } = require("../models");
const sequelize = require("sequelize");
const jwt = require("jsonwebtoken");

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
    console.log(req.body)
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).send("Invalid email or password.");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).send("Invalid email or password.");
    } else{
        
        const expiration = 3600;
        const token = jwt.sign({id: user.id}, "secret", {
            expiresIn: expiration
        })
        res.cookie('jwt', token, { httpOnly: true, maxAge: expiration*1000 })
        res.json(token);
    }
};
