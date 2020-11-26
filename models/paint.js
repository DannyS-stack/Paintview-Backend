'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class paint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      paint.belongsTo(models.brand)
      paint.belongsToMany(models.review)
    }
  };
  paint.init({
    name: DataTypes.STRING,
    paintRating: DataTypes.INTEGER,
    image: DataTypes.STRING,
    BrandId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'paint',
  });
  return paint;
};