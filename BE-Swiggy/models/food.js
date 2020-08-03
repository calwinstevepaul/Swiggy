'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    userId: DataTypes.INTEGER,
    foodName: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    isAvailable: DataTypes.BOOLEAN
  }, {});
  food.associate = function(models) {
    // associations can be defined here
    food.belongsTo(models.user);

  };
  return food;
};