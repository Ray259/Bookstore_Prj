const { Cart } = require("../models");
const { Book } = require("../models");
const sequelize = require("sequelize");

module.exports.view = async (req, res) => {
    try {
        const id = req.user.id;
        const cart = await Cart.findAll({
            where: { fk_userId: id, status: "pending" },
            raw: true,
        });
        for (const item of cart) {
            const book = await Book.findOne({ where: { isbn: item.fk_isbn } });
            item.bookInfo = book;
        }
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.add = async (req, res) => {
    try {
        const { isbn, quantity } = req.body;
        const userID = req.user.id;
        const t = await Cart.findOne({ where: { fk_userId: userID, fk_isbn: isbn } });
        if (t) {
            await Cart.increment(
                { quantity: quantity },
                { where: { fk_userId: userID, fk_isbn: isbn } }
            );
        } else {
            await Cart.create({
                fk_userId: userID,
                fk_isbn: isbn,
                quantity: quantity,
            });
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
