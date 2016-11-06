'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN, 
      defaultValue: false
    }
  }, {
    tableName: 'burgers',
    classMethods: {
      associate: function(models) {
         burgers.belongsTo(models.customer, {
            onDelete: "CASCADE",
            foreignKey: {
            allowNull: false
          }
        })
      }
    }
  });
  return burgers;
};