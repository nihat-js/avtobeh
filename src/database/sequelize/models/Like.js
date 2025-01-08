import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Like = sequelize.define('Like', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  adId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  tableName: 'Like',
  timestamps: false,
});


export default Like