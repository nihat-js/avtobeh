import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const AutoBodyStyle = sequelize.define('AutoBodyStyles', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.INTEGER, // Assuming you want to store an integer
    allowNull: true,
    defaultValue: null,
  },
  nameAztype: {
    type: DataTypes.INTEGER, // Assuming you want to store an integer
    allowNull: true,
    defaultValue: null,
  },
  createdAt: {
    type: DataTypes.DATE, // Use DATE for DATETIME
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE, // Use DATE for DATETIME
    allowNull: false,
  },
}, {
  tableName: 'AutoBodyStyles',
  timestamps: false, // Set to true if you want Sequelize to manage createdAt/updatedAt fields automatically
});



export default AutoBodyStyle;
