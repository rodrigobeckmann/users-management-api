'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, _Sequelize) =>
    await queryInterface.bulkInsert('Users', [{
      full_name: 'John Doe',
      email: 'john@email.com',
      password: '123456',
      is_admin: true,
      full_address: 'Rua dos Bobos, nº 0',
    },
    {
      full_name: 'Jane Doe',
      email: 'jane@email.com',
      password: '123456',
      is_admin: false,
      full_address: 'Rua dos Bobos, nº 1',
    }
  ], {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
