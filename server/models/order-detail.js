"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class OrderDetail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            OrderDetail.belongsTo(models.User, {
                onDelete: "cascade",
                foreignKey: "fk_userID",
            });
            OrderDetail.belongsTo(models.Book, {
                onDelete: "cascade",
                foreignKey: "fk_isbn",
            });
        }
    }
    OrderDetail.init(
        {
            orderId: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: "pending",
            }
        },
        {
            sequelize,
            modelName: "OrderDetail",
        }
    );
    return OrderDetail;
};
