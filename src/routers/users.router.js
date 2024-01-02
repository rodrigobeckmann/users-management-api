const { Router } = require('express');
const userController = require('../controllers/users.controller');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);
usersRouter.get('/:id', userController.getUserById);

module.exports = usersRouter;