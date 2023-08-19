'use strict';

const { getCurrentTimestamp } = require('../timestamp');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('LogEntries', [
        {
          date: new Date('2023-08-16'),
          time: '18:30:00',
          ph: 6.34,
          ppm: 1496,
          temperature: 73.9,
          createdAt: getCurrentTimestamp(),
          updatedAt: getCurrentTimestamp(),
        },
        {
          date: new Date('2023-08-17'),
          time: '18:30:00',
          ph: 6.42,
          ppm: 1162,
          temperature: 73.9,
          createdAt: getCurrentTimestamp(),
          updatedAt: getCurrentTimestamp(),
        },
        {
          date: new Date('2023-08-18'),
          time: '18:30:00',
          ph: 6.42,
          ppm: 1399,
          temperature: 73.9,
          createdAt: getCurrentTimestamp(),
          updatedAt: getCurrentTimestamp(),
        },
        
      ], {});

  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('LogEntries', null, {});

  }
};
