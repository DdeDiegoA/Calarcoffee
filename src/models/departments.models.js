import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import { Countries } from './countries.models.js';

export const Departments = sequelize.define(
  'Departments',
  {
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
  },
  { timestamps: false }
);

Departments.belongsTo(Countries, {
  foreignKey: { name: 'countrieId', allowNull: false },
});
Countries.hasMany(Departments, {
  foreignKey: { name: 'countrieId', allowNull: false },
});
