const { User } = require("../models");
const _ = require("lodash");

const preparedUser = (body) =>
  _.pick(body, ["first_name", "last_name", "email", "birthday"]);

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ limit: 5 });
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const prep = preparedUser(req.body);
    const createUser = await User.create(prep);
    res.status(201).send({ data: createUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserByID = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const prep = preparedUser(body);
    const foundUser = await User.findByPk(id);
    const updateUser = await foundUser.update(prep);
    res.status(201).send({ data: updateUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.params.id)
    const deleteUser = await foundUser.destroy();
    res.status(200).send({data: foundUser})
  } catch (error) {
    next(error);
  }
};
