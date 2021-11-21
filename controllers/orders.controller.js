const { Order } = require("../models");
const _ = require("lodash");

const preparedOrder = (body) =>
  _.pick(body, ["name_orders", "id_user", "is_send", "date_send"]);

module.exports.getAllOrders = async (req, res, next) => {
  try {
    const oders = await Order.FindAll({ limit: 2 });
    res.status(200).send({ data: orders });
  } catch (error) {
    next(error);
  }
};

module.exports.createOrders = async (req, res, next) => {
  try {
    const prep = preparedOrder(req.body);
    const createOrder = await Order.create(prep);
    res.status(201).send({ data: createOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.getOrderByID = async (req, res, next) => {
  try {
    const order = await Order.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send({ data: order });
  } catch (error) {
    next(error);
  }
};

module.exports.updateOrder = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const prep = preparedOrder(body);
    const foundOrder = await Order.findByPk(id);
    const updateOrder = await foundOrder.update(prep);
    res.status(201).send({ data: updateOrder });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteOrder = async (req, res, next) => {
  try {
    const foundOrder = await Order.findByPk(req.params.id);
    const deleteOrder = await Order.destroy();
    res.status(200).send({ data: foundOrder });
  } catch (error) {
    next(error);
  }
};
