import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import { Departments } from './departments.models.js';

export const Cities = sequelize.define(
  'Cities',
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

Cities.belongsTo(Departments, {
  foreignKey: { name: 'departmentId', allowNull: false },
});
Departments.hasMany(Cities, {
  foreignKey: { name: 'departmentId', allowNull: false },
});
