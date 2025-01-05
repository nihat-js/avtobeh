import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('avtobeh_development', 'nihat', 'Salam3169!!', {
  host: '84.247.20.175',
  dialect: 'mysql',
});

// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database:', error);
// });
