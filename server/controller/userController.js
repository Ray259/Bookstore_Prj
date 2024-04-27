const { User } = require("../models");

module.exports.getAll = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.getPersonal = async (req, res) => {
    try {
        console.log(req.user);
        const userId = req.user.id;
        const t = await User.findOne({ where: { id: userId } });
        res.json(t);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.create = async (req, res) => {
    try {
        const { email, password, name, phone, role } = req.body;
        const t = await User.findOne({ where: { email: email } });
        if (t) {
            return res.status(400).send("The user with this email already exists");
        } else {
            await User.create({
                email: email,
                password: password,
                name: name,
                phone: phone,
                role: role,
            });
            res.json({ email, password, name, phone });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findOne({ where: { id: id } });
        if (user) {
            await user.destroy();
            res.json("user deleted");
        } else {
            res.json("user not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// module.exports.update = async (req, res) => {
//     const id = req.params.id;
// };
