"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameOrders: {
        field: "name_orders",
        type: Sequelize.STRING(256),
        allowNull: false,
      },
      idUser: {
        field: "id_user",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      isSend: {
        field: "is_send",
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      dateSend: {
        field: "date_send",
        type: Sequelize.DATE,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updateAt",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("orders");
  },
};
