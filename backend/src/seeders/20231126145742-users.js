'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) =>
    await queryInterface.bulkInsert('Users', [{
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@email.com',
      password: '123456',
      telephone: '123456789',
      user_picture: 'https://i.pravatar.cc/300',
      address: 'Rua dos Bobos',
      address_number: 0,
      zip_code: '12345-678',
      city: 'São Paulo',
      state: 'São Paulo',
      country: 'Brasil',
      is_admin: true,
    },
    {
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane@email.com',
      password: '123456',
      telephone: '123456789',
      user_picture: 'https://i.pravatar.cc/300',
      address: 'Rua dos Bobos',
      address_number: 0,
      zip_code: '12345-678',
      city: 'São Paulo',
      state: 'São Paulo',
      country: 'Brasil',
      is_admin: false,
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
