import { databaseConfig } from '../config/config.js';
import sequelize from '../config/database.js';
import app from './app.js';

const PORT = databaseConfig.port || 4000;

async function main() {
  await sequelize.sync({ force: false });
  app.listen(PORT);
  console.log('Server conection!! listening on port', PORT);
  try {
  } catch (error) {
    console.log('Unable to connect to the database', error);
  }
}

main();
