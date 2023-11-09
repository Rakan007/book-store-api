'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
      nama: 'Faris',
      alamat: 'Bandung',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        nama: 'Girtianda',
        alamat: 'Cimahi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Iurie',
        alamat: 'Kabupaten',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nama: 'Iurie',
        alamat: 'Kabupaten',
        createdAt: new Date(),
        updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
