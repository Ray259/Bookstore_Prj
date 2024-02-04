const { Book } = require("../models");
const sequelize = require("sequelize");

module.exports.getAll = async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
};

module.exports.create = async (req, res) => {
    const book = req.body;
    const t = await Book.findOne({ where: { isbn: book.isbn } });
    if (t) {
        return res.status(400).send("The book with this ISBN is already exists");
    } else {
        Book.create({
            isbn: book.isbn,
            image: book.image,
            name: book.name,
            author: book.author,
            publisher: book.publisher,
            release: book.release,
            category: book.category,
            price: book.price,
            format: book.format,
            condition: book.condition,
            overview: book.overview,
        });
        res.json(book);
    }
};

module.exports.delete = async (req, res) => {
    const isbn = req.params.isbn;
    const t = await Book.findOne({ where: { isbn: isbn } });
    if (t) {
        await t.destroy();
        res.json("book deleted");
    } else {
        res.json("book not found");
    }
};


module.exports.update = async (req) => {
    const book = req.body;
    const t = await Book.findOne({ where: { isbn: book.isbn } });
    if (t) {
        const updatedFields = {};
        if (book.image) updatedFields.image = book.image;
        if (book.name) updatedFields.name = book.name;
        if (book.author) updatedFields.author = book.author;
        if (book.publisher) updatedFields.publisher = book.publisher;
        if (book.release) updatedFields.release = book.release;
        if (book.category) updatedFields.category = book.category;
        if (book.price) updatedFields.price = book.price;
        if (book.format) updatedFields.format = book.format;
        if (book.condition) updatedFields.condition = book.condition;
        if (book.overview) updatedFields.overview = book.overview;

        await Book.update(updatedFields, { where: { isbn: book.isbn } });
    }
};
