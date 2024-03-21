import { sequelize } from '../database/db.js';
import { DataTypes } from 'sequelize';
import { User } from './User.js';

export const Speciality = sequelize.define(
  'specialities',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    speciality_name: DataTypes.STRING,
  }
);

// Speciality.hasMany(User, {
//   foreignKey: 'speciality_id',
//   sourceKey: 'id',
// })

// User.belongsTo(Speciality, {
//   foreignKey: 'speciality_id',
//   targetId: 'id',
// })
