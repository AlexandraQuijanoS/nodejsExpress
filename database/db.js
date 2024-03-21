import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
  'medicalappointment',
  'root',
  'PassSQL',
  {
    host: '127.0.0.1',
    dialect: 'mysql',
  },
);
