import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Import mysql2 explicitly
import { config } from '@/src/lib/config';

export const sequelize = new Sequelize(
  config.databaseName,
  config.databaseUser,
  config.databasePassword,
  {
    host: config.databaseHost,
    port: config.databasePort,
    dialect: 'mysql',
    dialectModule: mysql2,
    benchmark: false,
    freezeTableName: true,
    logging: false,
    // dialectOptions: {
      // connectTimeout: 10000
    // },
    // pool: {
    //   max: 10, 
    //   min: 0,
    //   acquire: 30000,
    //   idle: 10000,
    // }
  });




sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
