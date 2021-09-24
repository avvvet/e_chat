'use strict';
const {
  Model
} = require('sequelize');
const { uuid } = require('uuidv4');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    
    static associate(models) {
      
    }
  };
  Room.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  Room.beforeCreate((Room) => {
    Room.id = uuid();
  })
  return Room;
};