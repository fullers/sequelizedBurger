'use strict';

// Require our models
var burger = require('../models')['burgers']

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

    // bulk insert these entries using our model
    return burger.bulkCreate(
      [
        {burger_name: "Quarter Pound Cheese Burger"},
        {burger_name: "Big Mac"},
        {burger_name: "Bacon Swiss Burger"},
        {burger_name: "A1 Bacon Swiss Burger"},
        {burger_name: "Turkey Burger"}

      ]
    )
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    // remove all instances of these burgers from the table
    return burger.destroy({ where:{burger_name: [

      "Quarter Pound Cheese Burger",
      "Big Mac",
      "Bacon Swiss Burger",
      "A1 Bacon Swiss Burger",
      "Turkey Burger"

      ]},
      truncate: true
    })
  }
};
