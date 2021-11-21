const usersRouter = require("express").Router();

usersRouter
.route('/')
.get()
.post()

.route('/:id')
.get()
.update()
.delete()

module.exports = usersRouter;