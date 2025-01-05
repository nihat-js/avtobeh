import { DataTypes } from "sequelize";
import { sequelize, Model } from "../db.js";


// class User extends Model {}


// User.init({
//   id: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//   },
//   name: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: DataTypes.STRING,
//     allowNull: false,
//   },
// },
//   {
//     sequelize,
//     modelName: "User",
//     tableName : "users",
//     timestamps: false,
//   }
// )

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
},
  {
    timestamps: false,
    tableName : "users",
  }
)

export default User;