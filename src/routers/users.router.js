const { Router } = require('express');
const userController = require('../controllers/users.controller');
const adminValidation = require('../middlewares/adminValidation');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);
usersRouter.get('/', adminValidation, userController.listAllUsers);

module.exports = usersRouter;