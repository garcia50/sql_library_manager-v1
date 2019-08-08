'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
    
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkInsert('People', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
    
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('People', null, {});
//     */
//   }
// };

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
        title: 'Jaws',
        author: 'White',
        genre: 'thriller',
        year: 1900,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};