'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Trees.belongsToMany(models.Insect,{
        through:models.InsectTree,
        foriegnKey:'treeId',
        otherKey:'insectId'

      })
    }
  };
  Trees.init({
    
    tree: DataTypes.STRING,
    location: DataTypes.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    },
    groundCircumferenceFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0,
      }
    }
  }, {
    sequelize,
    modelName: 'Trees',
  });
  return Trees;
};