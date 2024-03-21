import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';
import { Appointment } from './Appointment.js';

export const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    userType: DataTypes.INTEGER,
    speciality_id: DataTypes.INTEGER
  }
);

User.hasMany(Appointment, {
  foreignKey: 'doctor_id',
  sourceKey: 'id',
});

Appointment.belongsTo(User, {
  foreignKey: 'doctor_id',
  targetId: 'id',
});

