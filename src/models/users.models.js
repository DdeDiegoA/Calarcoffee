import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import { Roles } from './roles.models.js';
import { Cities } from './cities.models.js';

export const Users = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});
// * user belongs to a role but roles has many users
Users.belongsTo(Roles, { foreignKey: { name: 'roleId', allowNull: false } });
Roles.hasMany(Users, { foreignKey: { name: 'roleId', allowNull: false } });

// * user belongs to a city but a city has many users
Users.belongsTo(Cities, { foreignKey: { name: 'cityId', allowNull: false } });
Cities.hasMany(Users, { foreignKey: { name: 'cityId', allowNull: false } });
