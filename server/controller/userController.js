const { User } = require("../models");
const sequelize = require("sequelize");

module.exports.getAll = async (req, res) => {
    const users = await User.findAll();
    res.json(users);
};

module.exports.create = async (req, res) => {
    const { email, password, name, phone } = req.body;    
    const t = await User.findOne({ where: { email: email } });
    if (t) {
        return res.status(400).send("The user with this email already exists");
    } else {
        await User.create({
            email: email,
            password: password,
            name: name,
            phone: phone,
        });
        res.json({ email, password, name, phone });
    }
};

module.exports.delete = async (req, res) => {
    const id = req.params.id;
    const user = await User.findOne({ where: { id: id } });
    if (user) {
        await user.destroy();
        res.json("user deleted");
    } else {
        res.json("user not found");
    }
};


module.exports.update = async (req, res) => {
    const id = req.params.id;
}