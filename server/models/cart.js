"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cart.belongsTo(models.Book, {
                foreignKey: "fk_isbn",
                targetKey: "isbn",
            });
        }
    }
    Cart.init(
        {
            quantity: {
                type: DataTypes.INTEGER,
                defaultValue: 1,
            },
        },
        {
            sequelize,
            modelName: "Cart",
        }
    );
    return Cart;
};
