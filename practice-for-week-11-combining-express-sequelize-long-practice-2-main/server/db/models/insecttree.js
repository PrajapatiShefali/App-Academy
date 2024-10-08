'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InsectTree extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.InsectTree.hasMany(models.Insect);
      // models.InsectTree.hasMany(models.Trees);
    }
  }
  InsectTree.init({
    insectId: DataTypes.INTEGER,
    treeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InsectTree',
  });
  return InsectTree;
};