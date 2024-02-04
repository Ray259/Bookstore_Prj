"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Order.belongsTo(models.User, {
                onDelete: "cascade",
                foreignKey: "fk_userID",
            });
        }
    }
    Order.init(
        {
            total: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: "pending",
            },
        },
        {
            sequelize,
            modelName: "Order",
        }
    );
    return Order;
};
