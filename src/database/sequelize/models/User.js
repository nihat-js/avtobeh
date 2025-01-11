import { DataTypes } from "sequelize";
import { sequelize, Model } from "../db.js";





const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  provider : {
    type: DataTypes.STRING,
    allowNull: true,
  }
},
  {
    timestamps: false,
    tableName: "User",
  }
)

export default User;