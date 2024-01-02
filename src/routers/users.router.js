const { Router } = require('express');
const userController = require('../controllers/users.controller');
const adminValidation = require('../middlewares/adminValidation');
const userValidation = require('../middlewares/userValidation');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);
usersRouter.get('/', adminValidation, userController.listAllUsers);
usersRouter.get('/:id', userValidation, userController.getUserById);

module.exports = usersRouter;