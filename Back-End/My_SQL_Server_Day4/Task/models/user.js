'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.post,{
        foreignKey:'userId', 
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: {
      type:DataTypes.STRING,
      validate:{
          isIn:[['m','f']]
        }
      }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};