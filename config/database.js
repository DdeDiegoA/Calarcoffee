import { Sequelize } from 'sequelize';
import { databaseConfig } from './config.js';

const sequelize = new Sequelize(
  databaseConfig.name, //name
  databaseConfig.user,
  databaseConfig.password,
  {
    host: databaseConfig.host,
    dialect: databaseConfig.dialect,
  }
);

export default sequelize;
