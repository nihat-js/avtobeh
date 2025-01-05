const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoModel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    brandName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    name: {
      type: DataTypes.STRING(191),
      allowNull: false
    },
    years: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    isVisible: {
      type: DataTypes.STRING(191),
      allowNull: true
    },
    count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    groupName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "slug"
    }
  }, {
    sequelize,
    tableName: 'autoModel',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "slug",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "slug" },
        ]
      },
    ]
  });
};
