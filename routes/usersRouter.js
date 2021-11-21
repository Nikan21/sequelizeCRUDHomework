const usersRouter = require("express").Router();
const userController = require ("../controllers/users.controller")

usersRouter
.route('/')
.get(userController.getAllUsers)
.post(userController.createUser)

usersRouter
.route('/:id')
.get(userController.getUserByID)
.patch(userController.updateUser)
.delete(userController.deleteUser)

module.exports = usersRouter;