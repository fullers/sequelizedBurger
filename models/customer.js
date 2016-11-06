'use strict';
module.exports = function(sequelize, DataTypes) {
  var customer = sequelize.define('customer', {
    customer: DataTypes.STRING,
  }, {
     classMethods: {
      associate: function(models) {
          customer.hasMany(models.burgers, {
            onDelete: "CASCADE",
            hooks: true,
            foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return customer;
};