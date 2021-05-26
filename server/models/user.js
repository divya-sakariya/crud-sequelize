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
      // define association here
    }
  };
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    streetName: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postal: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthDate: DataTypes.STRING,
    country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};