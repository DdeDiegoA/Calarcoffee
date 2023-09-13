import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

export const Permissions = sequelize.define(
  'Permissions',
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
