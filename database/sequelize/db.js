import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Import mysql2 explicitly

export const sequelize = new Sequelize('avtobeh_development', 'nihat', 'Salam3169!!', {
  host: '84.247.20.175',
  dialect: 'mysql',
  dialectModule: mysql2,
  benchmark: true,
  freezeTableName: true
});



// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });
