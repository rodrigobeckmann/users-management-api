const { Router } = require('express');
const userController = require('../controllers/users.controller');
const adminValidation = require('../middlewares/adminValidation');
const userValidation = require('../middlewares/userValidation');

const usersRouter = Router();

usersRouter.post('/', userController.createUser);
usersRouter.get('/', adminValidation, userController.listAllUsers);
usersRouter.get('/logged', userValidation, userController.getLoggedUser);
usersRouter.get('/:id', userValidation, userController.getUserById);
usersRouter.patch('/:id', userValidation, userController.updatedUser);
usersRouter.patch('/:id/picture', userValidation, userController.updateUserPicture);
usersRouter.delete('/:id', adminValidation, userController.deleteUser);

module.exports = usersRouter; 