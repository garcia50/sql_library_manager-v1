const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Sequelize.Model {}
  Book.init({
    title: {
      Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "title"',
        },
        notEmpty: {
          msg: 'Please provide a value for "title"',
        },
      },
    },
    author: {
      Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please provide a value for "author"',
        },
        notEmpty: {
          msg: 'Please provide a value for "author"',
        },
      },
    },
    genre:  Sequelize.STRING,
    year:   Sequelize.INTEGER
  }, { sequelize });

  return Book;
};