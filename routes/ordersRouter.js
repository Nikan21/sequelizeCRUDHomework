const ordersRouter = require("express").Router();
const orderController = require ("../controllers/orders.controller")

ordersRouter
.route('/')
.get(orderController.getAllOrders)
.post(orderController.createOrders)

.route('/:id')
.get(orderController.getOrderByID)
.update(orderController.updateOrder)
.delete(orderController.deleteOrder)

module.exports = ordersRouter;