'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    userId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {});
  cart.associate = function(models) {
    // associations can be defined here
    cart.belongsTo(models.food);
  };
  return cart;
};