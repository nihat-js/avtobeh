import {  DataTypes } from 'sequelize';
import { sequelize } from '../db.js';



const Ad  = sequelize.define('Ad', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  currencyId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: 1,
  },
  countryId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  cityId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  viewsCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  deletedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  renewedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  expiresAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: null,
  },
  contactName : {
    type: DataTypes.STRING(15),
    allowNull: true,
    defaultValue: null,
  },
  contactPhoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: true,
    defaultValue: null,
  },
  contactEmail: {
    type: DataTypes.STRING(40),
    allowNull: true,
    defaultValue: null,
  },
  description : {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
  }
}, {
  tableName: 'Ad',
  timestamps: true,
});



export default Ad;
