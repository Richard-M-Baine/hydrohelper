'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LogEntrie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  LogEntrie.init({
    date: DataTypes.DATEONLY,
    number: DataTypes.DECIMAL,
    time: DataTypes.TIME,
    ph: DataTypes.DECIMAL,
    ppm: DataTypes.INTEGER,
    temperature: DataTypes.DECIMAL,
    photograph: DataTypes.STRING

  }, {
    sequelize,
    modelName: 'LogEntrie',
  });
  return LogEntrie;
};