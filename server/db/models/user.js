const {
  Model,
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
      this.hasMany(models.Documentation, { foreignKey: 'userId' });
      this.hasOne(models.Driver, { foreignKey: 'userId' });
      this.hasMany(models.License, { foreignKey: 'userId' });
      this.hasOne(models.Avatar, { foreignKey: 'userId' });
      this.hasOne(models.Token, { foreignKey: 'userId' });
      this.hasMany(models.Chat, { foreignKey: 'userId' });
      this.hasMany(models.UserRoute, { foreignKey: 'userId' });
      this.hasOne(models.Chat, { foreignKey: 'userId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    telephone: DataTypes.STRING,
    password: DataTypes.STRING,
    gender: DataTypes.STRING,
    age: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
