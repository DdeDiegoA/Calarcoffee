import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

export const Roles = sequelize.define(
  'Roles',
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
