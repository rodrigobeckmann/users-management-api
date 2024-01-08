const userService = require('../services/users.service');

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await userService.getUserById(id);

  return res.status(status).json(data);
}

const getLoggedUser = async (req, res) => {
  const { id } = req.user;

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
  const { firstName, lastName, address, addressNumber, zipCode, city, state, country  } = req.body;
  const { id } = req.params;

  const { status, data } = await userService.updateUser(id, { firstName, lastName, address, addressNumber, zipCode, city, state, country  });

  return res.status(status).json(data);

}

const updateUserPicture = async (req, res) => {
  const { userPicture } = req.body;
  const { id } = req.params;

  const { status, data } = await userService.updateUserPicture(id, { userPicture });

  return res.status(status).json(data);
}

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const { status } = await userService.deleteUser(id);

  return res.status(status).json();
}

module.exports = {
  createUser,
  getUserById,
  getLoggedUser,
  listAllUsers,
  updatedUser,
  updateUserPicture,
  deleteUser,
}