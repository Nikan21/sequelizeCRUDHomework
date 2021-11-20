"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {}
  }
  Users.init(
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING(128),
        allowNull: false,
      },
      email: { type: DataTypes.STRING(256), allowNull: false },
      birthday: { type: DataTypes.DATEONLY, allowNull: false },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      underscore: true,
    }
  );
  return Users;
};
