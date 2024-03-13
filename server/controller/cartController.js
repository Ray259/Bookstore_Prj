const { Cart, Book, Order, OrderDetail } = require("../models");
const orderDetail = require("../models/order-detail");

module.exports.view = async (req, res) => {
    try {
        const id = req.user.id;
        const cart = await Cart.findAll({
            where: { fk_userId: id },
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

module.exports.order = async (req, res) => {
    try {
        const userID = req.user.id;
        const cart = await Cart.findAll({
            where: { fk_userId: userID },
            include: Book,
        });
        if (cart.length) {
            let total = 0;
            for (c of cart) {
                total += c.quantity * c.Book.price;
            }
            const order = await Order.create({ total: total, fk_userID: userID });

            for (c of cart) {
                const orderId = order.id;
                await OrderDetail.create({
                    orderId: orderId,
                    quantity: c.quantity,
                    price: c.quantity * c.Book.price,
                    fk_isbn: c.fk_isbn,
                    fk_userID: c.fk_userId,
                });
            }
            await Cart.destroy({ where: { fk_userId: userID } });
            res.json(order);
        } else {
            res.json("cart is empty");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

module.exports.viewOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.findAll({ where: { fk_userID: userId } });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
