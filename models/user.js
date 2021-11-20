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
        validate: {
          isAlpha: true,
          notNull: true,
          notEmpty: true,
          len: [2, 64]
        },
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
          isAlpha: true,
          notNull: true,
          notEmpty: true,
          len: [2, 128]
        },
      },
      email: {
        type: DataTypes.STRING(256),
        allowNull: false,
        validate: {
          isEmail: true,
          notNull: true,
          notEmpty: true
        },
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        validate: {
          isDate: true,
          notNull: true,
          notEmpty: true
        },
      },
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
