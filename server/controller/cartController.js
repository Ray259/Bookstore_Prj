const { Cart, Book, Order } = require("../models");

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
        // console.log(cart);
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

module.exports.update = async (req, res) => {
    try {
        const { isbn, quantity } = req.body;
        const userId = req.user.id;
        const t = await Cart.findOne({ where: { fk_userId: userId, fk_isbn: isbn } });
        if (t) {
            await Cart.update(
                { quantity: quantity },
                { where: { fk_userId: userId, fk_isbn: isbn } }
            );
            res.json("item updated");
        } else {
            res.json("item not found");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const { isbn } = req.body;
        const userId = req.user.id;
        const t = await Cart.findOne({ where: { fk_userId: userId, fk_isbn: isbn } });
        if (t) {
            await t.destroy();
            res.json("item deleted");
        } else {
            res.json("item not found");
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports.order = async (req, res) => {};
