const { Cart } = require("../models");
const sequelize = require("sequelize");

module.exports.view = async (req, res) => {
    const id = req.user.id;
    const cart = await Cart.findAll({ where: { fk_user: id } });
    res.json(cart);
};

module.exports.add = async (req, res) => {
    const { isbn, quantity } = req.body;
    const userID = req.user.id;
    const t = await Cart.findOne({ where: { fk_userId: userID, fk_isbn: isbn } });
    if (t) {
        await Cart.increment(
            { 'quantity': quantity },
            { where: { fk_userId: userID, fk_isbn: isbn } }
        );
    } else {
        await Cart.create({
            fk_user: userID,
            fk_book: isbn,
            quantity: quantity,
        });
    }
};
