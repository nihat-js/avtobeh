import {  DataTypes } from 'sequelize';
import { sequelize } from '../db.js';



const Auto = sequelize.define('Auto', {

  adId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
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
  mileageUnitId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  horsePower: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
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
  fuelConsumptionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  seatsCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
  },
  colorId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  transmissionTypeId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  isWhatsappActive: {
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
  bodyStyleId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  wheelDriveTypeId: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: null,
  },
  
}, {
  tableName: 'Auto',
  timestamps: true, // Set to false if you don't want Sequelize to manage createdAt/updatedAt
});

// Sync the model with the database (optional)


export default Auto;
