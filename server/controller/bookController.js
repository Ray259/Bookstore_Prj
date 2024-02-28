const { Book } = require("../models");
const { Genre } = require("../models");
const sequelize = require("sequelize");
const { Op } = require("sequelize");
const db = require("../models");

module.exports.getAll = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.create = async (req, res) => {
    try {
        const book = req.body;
        const t = await Book.findOne({ where: { isbn: book.isbn } });
        if (t) {
            return res.status(400).send("The book with this ISBN already exists");
        } else {
            await Book.create({
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
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.delete = async (req, res) => {
    try {
        const isbn = req.params.isbn;
        const t = await Book.findOne({ where: { isbn: isbn } });
        if (t) {
            await t.destroy();
            res.json("Book deleted");
        } else {
            res.json("Book not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.update = async (req, res) => {
    try {
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
            res.json("Book updated");
        } else {
            res.json("Book not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.query = async (req, res) => {
    try {
        const { isbn, category, name, genre } = req.query;
        if (isbn) {
            const book = await Book.findOne({ where: { isbn: isbn } });
            if (book) {
                res.json(book);
            } else {
                res.json("Book not found");
            }
        }
        if (name) {
            const books = await Book.findAll({
                where: { name: { [Op.substring]: name } },
            });
            if (books) {
                res.json(books);
            } else {
                res.json("Books not found");
            }
        }
        if (category) {
            const books = await Book.findAll({ where: { category: category } });
            if (books) {
                res.json(books);
            } else {
                res.json("Books not found");
            }
        }
        if (genre) {
            if (genre == "all") {
                const books = await Book.findAll();
                res.json(books);
            } else {
                const books = await db.sequelize.query(
                    `SELECT b.* FROM Books b
                INNER JOIN Genres g ON b.category = g.category
                WHERE g.name = :genre`,
                    {
                        replacements: { genre: genre },
                        type: sequelize.QueryTypes.SELECT,
                    }
                );
                res.json(books);
            }
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Genre
module.exports.getAllGenres = async (req, res) => {
    try {
        const genres = await Genre.findAll({
            order: [["prio", "ASC"]],
            group: ["name", "prio"],
        });
        res.json(genres);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Genre.findAll({
            attributes: ["category"],
            order: [[sequelize.literal("SUBSTRING(category, 1, 1)"), "ASC"]],
        });
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
