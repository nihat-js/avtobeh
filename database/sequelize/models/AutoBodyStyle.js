const { sequelize } = require("../db");

const AutoBodyStyle = sequelize.define('autoBodyStyle', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  name: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: 'autoBody',
  timestamps: true,
});
