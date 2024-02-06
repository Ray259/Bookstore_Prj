const { Cart } = require("../models");
const sequelize = require("sequelize");

module.exports.view = async (req, res) => {
    const id = req.params.id;
    const cart = await Cart.findAll({ where: { fk_user: id } });
    res.json(cart);
};
