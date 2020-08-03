'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    userId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER,
    restaurantId: DataTypes.INTEGER,
    isPrepared: DataTypes.BOOLEAN,
    isDelivered: DataTypes.BOOLEAN
  }, {});
  order.associate = function(models) {
    // associations can be defined here
    order.belongsTo(models.user);
    order.belongsTo(models.food);


  };
  return order;
};