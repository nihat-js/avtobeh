const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('catalog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelId: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'catalog',
    timestamps: false
  });
};
