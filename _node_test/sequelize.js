const { Sequelize, DataTypes, Model } = require('sequelize');

// Create a new instance of Sequelize
const sequelize = new Sequelize('avtobeh_development', 'nihat', 'Salam3169!!', {
  host: '84.247.20.175',
  dialect: 'mysql',
  benchmark: true,
  pool: {
    max: 5, 
    min: 0,
    acquire: 30000, 
    idle: 10000,
},
  // port:
});

// Test the connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();



/**
 * @typedef {import('sequelize').Model} Model
 */

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'User',
});

module.exports = { sequelize, User };
