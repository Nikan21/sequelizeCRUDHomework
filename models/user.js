"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
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
      modelName: "User",
      tableName: "users",
      underscore: true,
    }
  );
  return User;
};
