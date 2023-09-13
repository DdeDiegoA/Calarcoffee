import { databaseConfig } from '../config/config.js';
import sequelize from '../config/database.js';
import app from './app.js';

import './models/users.models.js';
import './models/roles.models.js';
import './models/rolesPermissions.models.js';
import './models/permissions.models.js';
import './models/cities.models.js';
import './models/departments.models.js';
import './models/countries.models.js';
import './models/payStatus.models.js';

const PORT = databaseConfig.port || 4000;

async function main() {
  await sequelize.sync({ force: true });
  app.listen(PORT);
  console.log('Server conection!! listening on port', PORT);
  try {
  } catch (error) {
    console.log('Unable to connect to the database', error);
  }
}

main();
