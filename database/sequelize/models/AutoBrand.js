import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import AutoModel from "./AutoModel.js";

const AutoBrand = sequelize.define('AutoBrand', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    collate: 'utf8mb4_unicode_ci',
  },
  slug: {
    type: DataTypes.STRING(20),
    allowNull: false,
    collate: 'utf8mb4_0900_ai_ci',
  },
  groupName: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  rank: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 0,
  },
  itemCount: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  country: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  logo: {
    type: DataTypes.STRING(255),
    allowNull: true,
    defaultValue: null,
    collate: 'utf8mb4_unicode_ci',
  },
  isVisible: {
    type: DataTypes.TINYINT,
    allowNull: true,
    defaultValue: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'AutoBrand', // Actual table name in the database
  timestamps: false, // Set to true if you want Sequelize to manage createdAt/updatedAt fields
});


AutoBrand.hasMany(AutoModel , { foreignKey: 'brandId' });


export default AutoBrand