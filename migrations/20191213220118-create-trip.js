'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      city: {
        type: Sequelize.STRING
      },
       hotel: {
        type: Sequelize.STRING
      },
      rating: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      meal_plan: {
        type: Sequelize.TEXT
      },
      days: {
        type: Sequelize.TEXT
      },
      image_url: {
        type: Sequelize.TEXT
      },
      agency_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Trips');
  }
};