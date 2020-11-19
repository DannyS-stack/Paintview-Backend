'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      review.hasMany(models.comment)
      review.belongsTo(models.user)
      review.belongsTo(models.paint)
    }
  };
  review.init({
    rating: DataTypes.INTEGER,
    reviewcontent: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};