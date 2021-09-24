'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subscription extends Model {
    static associate(models) {
      Subscription.belongsTo(models.User, {
        foreignKey: 'user_uuid'
      }),
      Subscription.belongsTo(models.Room, {
        foreignKey: 'room_uuid'
      })
    }
  };
  Subscription.init({
    user_uuid: DataTypes.UUID,
    room_uuid: DataTypes.UUID,
    isJoined: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Subscription',
  });
  return Subscription;
};