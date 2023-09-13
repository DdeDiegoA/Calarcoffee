import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';

export const Countries = sequelize.define(
  'Countries',
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
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
