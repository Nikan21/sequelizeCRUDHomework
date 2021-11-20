"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {}
  }
  Order.init(
    {
      nameOrders: {
        field: "name_orders",
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          isAlphanumeric: true,
          notNull: true,
          notEmpty: true,
          len: [5, 256],
        },
      },
      idUser: {
        field: "id_user",
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      quantity: { type: DataTypes.INTEGER, allowNull: false, defaultValue: 1 },
      isSend: {
        field: "is_send",
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        validate: {
          isNumeric: true,
          notNull: true,
          notEmpty: true,
          min: 1,
        },
      },
      dateSend: {
        field: "date_send",
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          notNull: true,
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "oreders",
      underscore: true,
    }
  );
  return Order;
};
