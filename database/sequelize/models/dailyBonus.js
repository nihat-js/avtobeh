const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dailyBonus', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 20
    },
    date: {
      type: DataTypes.DATE(3),
      allowNull: false,
      defaultValue: "CURRENT_TIMESTAMP(3)"
    }
  }, {
    sequelize,
    tableName: 'dailyBonus',
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
        name: "DailyBonus_userId_date_key",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "userId" },
          { name: "date" },
        ]
      },
    ]
  });
};
