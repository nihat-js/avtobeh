const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('autoImages', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      references: {
        model: 'autoSales',
        key: 'id'
      }
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    path: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    storage: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'autoImages',
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
      {
        name: "carId",
        using: "BTREE",
        fields: [
          { name: "carId" },
        ]
      },
    ]
  });
};
