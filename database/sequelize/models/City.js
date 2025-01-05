import { Sequelize, DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const City = sequelize.define('City', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: '0', // Adjust default value as needed
  },
  groupName: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  countryId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW, // Use DataTypes.NOW for current timestamp
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'City',
  timestamps: false, // Set to true if you want Sequelize to manage createdAt/updatedAt fields automatically
});


export default City;