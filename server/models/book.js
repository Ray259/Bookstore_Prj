"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Book.belongsToMany(models.User, {
                through: models.Cart,
                foreignKey: "fk_isbn",
                otherKey: "fk_userId",
            });
        }
    }
    Book.init(
        {
            isbn: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            publisher: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            release: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            format: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            condition: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            overview: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            amounts: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            modelName: "Book",
        }
    );
    return Book;
};
