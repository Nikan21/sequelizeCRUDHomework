const ordersRouter = require("express").Router();

ordersRouter
.route('/')
.get()
.post()

.route('/:id')
.get()
.update()
.delete()

module.exports = ordersRouter;