import { DataTypes } from 'sequelize';
import sequelize from '../../config/database.js';
import { Users } from './users.models.js';

export const payStatus = sequelize.define('Paystatus', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  subTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalTaxes: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bigTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bill: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  method: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  response: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  confirmation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

payStatus.belongsTo(Users, {
  foreignKey: { name: 'userId', allowNull: false },
});
Users.hasMany(payStatus, { foreignKey: { name: 'userId', allowNull: false } });
