const router = require("express").Router();
const usersRouter = require("./usersRouter");
const ordersRouter = require("./ordersRouter");

router.use("/users", usersRouter);
router.use("/orders", ordersRouter);

module.exports = router;
