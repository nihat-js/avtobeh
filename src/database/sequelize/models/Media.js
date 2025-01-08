import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Media = sequelize.define('Media', {
  adId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rank : {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Media',
  timestamps: false,
});


export default Media