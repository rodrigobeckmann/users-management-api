const { User } = require('../models');
const customError = require('../utils/customError');
const handleError = require('../utils/handleError');

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!user) throw new customError('User not found!', 404);
    return { status: 200, data: user };
  } catch (error) {
    return handleError(error);
  }
}

const listAllUsers = async () => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return { status: 200, data: users };
  } catch (error) {
    return handleError(error);
  }
}

const createUser = async (user) => {
  try {
    const { firstName, lastName, email, password, address, addressNumber, zipCode, city, state, country } = user;
    if (!firstName || !lastName || !email || !password || !address || !addressNumber || !zipCode || !city || !state || !country ) throw new customError('One or more required fields are missing!', 400);
    const foundUser = await User.findOne({ where: { email } });
    if (foundUser) throw new customError('This email is already in use!', 409);
    const newUser = await User.create(user);
    return { status: 201, data: newUser };
  } catch (error) {
    return handleError(error);
  }
}

const updateUser = async (id, body) => {
  try {
    const { firstName, lastName, address, addressNumber, zipCode, city, state, country  } = body;
    if (!firstName || !lastName || !address || addressNumber === undefined || !zipCode || !city || !state || !country ) throw new customError('One or more required fields are missing!', 400);
    const foundUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });
    if (!foundUser) throw new customError('User not found!', 404);
    const updatedUser = await foundUser.update(body);
    return { status: 200, data: updatedUser };
  } catch (error) {
    return handleError(error);
  }
}

const deleteUser = async (id) => {
  try {
    const foundUser = await User.findByPk(id);
    if (!foundUser) throw new customError('User not found!', 404);
    await foundUser.destroy();
    return { status: 204 };
  } catch (error) {
    return handleError(error);
  }
}

module.exports = {
  getUserById,
  listAllUsers,
  createUser,
  updateUser,
  deleteUser,
}