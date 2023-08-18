'use strict';

const { getCurrentTimestamp } = require('../timestamp');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('phs', [{
        number: 6.38,
        createdAt: getCurrentTimestamp(),
        updatedAt: getCurrentTimestamp()
        
      }], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('phs', null, {});

  }
};
