import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';
import { Speciality } from './speciality.js';
import { User } from './User.js';

export const DoctorSpecialities = sequelize.define(
  'doctorspecialities',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  },
);

User.belongsToMany(Speciality, {
  through: DoctorSpecialities,
});

Speciality.belongsToMany(User, {
  through: DoctorSpecialities,
});

