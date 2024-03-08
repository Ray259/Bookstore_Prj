const { Genre, Event } = require("../models");

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

module.exports.getCategoryDescription = async (req, res) => {
    try {
        const { category } = req.query;
        const { description } = await Genre.findOne({
            where: { category: category },
            attributes: ["description"],
        });
        if (description) {
            res.json(description);
        } else {
            res.json("Category not found");
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.findAll();
        res.json(events);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}