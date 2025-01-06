
import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const AutoModel = sequelize.define('AutoModel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brandName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    defaultValue: '',
    collate: 'utf8mb4_unicode_ci',
  },
  name: {
    type: DataTypes.STRING(191),
    allowNull: false,
    collate: 'utf8mb4_unicode_ci',
  },
  years: {
    type: DataTypes.STRING(191),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  isVisible: {
    type: DataTypes.STRING(191),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  count: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  groupName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  slug: {
    type: DataTypes.STRING(20),
    allowNull: false,
    collate: 'utf8mb4_0900_ai_ci',
    unique: true, 
  },
}, {
  tableName: 'AutoModel', 
  timestamps: false,  
});



export default AutoModel