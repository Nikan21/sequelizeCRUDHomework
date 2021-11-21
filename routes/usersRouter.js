const usersRouter = require("express").Router();
const userController = require ("../controllers/users.controller")

usersRouter
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

.route('/:id')
.get(userController.getUserByID)
.update(userController.updateUser)
.delete(userController.deleteUser)

module.exports = usersRouter;