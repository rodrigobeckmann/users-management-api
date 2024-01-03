const { Router } = require('express');
const loginController = require('../controllers/login.controller');
const userValidation  = require('../middlewares/userValidation');

const loginRouter = Router();

loginRouter.post('/', loginController.userLogin);
loginRouter.get('/verify', userValidation, loginController.verifyUser);

module.exports = loginRouter;
