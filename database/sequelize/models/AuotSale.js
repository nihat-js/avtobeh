import {  DataTypes } from 'sequelize';
import { sequelize } from '../db.js';



const AutoSale = sequelize.define('AutoSale', {
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
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  brandName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  modelId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  modelName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  horsePower: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  currency: {
    type: DataTypes.ENUM('AZN', 'USD', 'EUR'),
    allowNull: true,
    defaultValue: 'AZN',
  },
  description: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  VIN: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  fuelTypeId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  seatCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  colorId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  transmissionType: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
  },
  isUrgent: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  isWhatsappActive: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  isOriginalMileage: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  country: {
    type: DataTypes.STRING(20),
    allowNull: true,
    defaultValue: null,
  },
  cityId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  engineSize: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  hasCasgo: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  barter: {
    type: DataTypes.TINYINT,
    allowNull: false,
    defaultValue: 0,
  },
  viewsCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
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
  bodyStyleId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  wheelDriveType: {
    type: DataTypes.ENUM('front', 'rear', 'full'),
    allowNull: true,
    defaultValue: null,
  },
  phoneNumber: {
    type: DataTypes.STRING(15),
    allowNull: true,
    defaultValue: null,
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: true,
    defaultValue: null,
  },
}, {
  tableName: 'AutoSale',
  timestamps: true, // Set to false if you don't want Sequelize to manage createdAt/updatedAt
});

// Sync the model with the database (optional)


export default AutoSale;
