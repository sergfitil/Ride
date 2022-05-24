const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Route, { foreignKey: 'routeId' });
      this.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Review.init({
    userId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    routeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
