import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import { Roles } from './roles.models.js';
import { Permissions } from './permissions.models.js';

export const RolesPermissions = sequelize.define(
  'RolesPermissions',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  },
  { timestamps: false }
);

Roles.belongsToMany(Permissions, {
  through: RolesPermissions,
  foreignKey: { name: 'roleId', allowNull: false },
});
Permissions.belongsToMany(Roles, {
  through: RolesPermissions,
  foreignKey: { name: 'permissionId', allowNull: false },
});
