const userService = require('../services/users.service');

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getUserById(id);

  return res.status(status).json(data);
}

const listAllUsers = async (_req, res) => {
  const { status, data } = await userService.listAllUsers();

  return res.status(status).json(data);
}

const createUser = async (req, res) => {
  const { body } = req;

  const { status, data } = await userService.createUser(body);

  return res.status(status).json(data);
}

const updatedUser = async (req, res) => {
  const { fullName, userPicture, fullAddress } = req.body;
  const { id } = req.params;

  const { status, data } = await userService.updateUser(id, { fullName, userPicture, fullAddress });

  return res.status(status).json(data);

}

module.exports = {
  createUser,
  getUserById,
  listAllUsers,
  updatedUser,
}