'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bnb extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  bnb.init({
    userID: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
    price: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'bnb',
  });
  return bnb;
};