const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoBrand', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    slug: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    groupName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    itemCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    logo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isVisible: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'autoBrand',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
