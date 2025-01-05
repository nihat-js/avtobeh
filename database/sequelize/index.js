
import { DataTypes } from "sequelize";
import { sequelize } from "./db.js";
import { colors } from "../../config/auto.js";
// import { DataTypes } from "sequelize";



const Color = sequelize.define('Color', {
  id : {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false, // Set to true if you want to allow null values
  },
  nameAze: {
    type: DataTypes.STRING,
    allowNull: true, // Set to true if you want to allow null values
  },
  hex: {
    type: DataTypes.STRING,
    allowNull: true, // HEX codes should not be null

  },
}, {
  tableName: 'colors', // Define the table name
  timestamps: false, // Set to true if you want createdAt and updatedAt fields
});


// AutoBodyStyle.sync({force : true})
// Color.sync({force : true})

Color.bulkCreate(colors, {
  ignoreDuplicates : true
})

