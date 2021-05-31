'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Walltes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Walltes.init({
    userID: DataTypes.NUMBER,
    btc: DataTypes.NUMBER,
    eth: DataTypes.NUMBER,
    doge: DataTypes.NUMBER,
    bnb: DataTypes.NUMBER,
    // xrp: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Walltes',
  });
  return Walltes;
};