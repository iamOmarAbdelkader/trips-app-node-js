'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('agencies', [
     {name: 'Travel Agency' , plan:'premium',email:'test1@test.com'},
     {name: 'Corsino Travel' , plan:'premium',email:'test2@test.com'},
     {name: 'Travel Agency', plan:'basic',email:'test3@test.com'},
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
