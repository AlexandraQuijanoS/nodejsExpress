import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';

export const Appointment = sequelize.define(
  'appointments',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    time: DataTypes.DATE
  },
  {
    timestamps: true,
  },
);
