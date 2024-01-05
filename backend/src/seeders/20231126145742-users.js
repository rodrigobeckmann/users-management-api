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
      address: 'Rua dos Bobos',
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
      address: 'Rua dos Bobos',
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
