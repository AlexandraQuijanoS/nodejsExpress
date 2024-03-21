import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';
import { Appointment } from './Appointment.js';

export const Patient = sequelize.define(
  'patients',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patientName: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    identity_id: DataTypes.INTEGER,
    phone: DataTypes.STRING,
  },
  {
    timestamps: true,
  },
);

Patient.hasMany(Appointment, {
  foreignKey: 'patient_id',
  sourceKey: 'id',
});

Appointment.belongsTo(Patient, {
  foreignKey: 'patient_id',
  targetId: 'id',
});
