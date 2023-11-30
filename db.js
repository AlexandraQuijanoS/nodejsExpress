const Sequelize = require("sequelize");

const SpecialityModel = require("./models/speciality");
const UserModel = require('./models/users');
const AppointmentModel = require('./models/appointments');
const PatientModel = require('./models/patients');

const sequelize = new Sequelize("medicalappointment", "root", "PassSQL", {
  host: "127.0.0.1",
  dialect: "mysql",
});

const User = UserModel(sequelize, Sequelize);
const Appointment = AppointmentModel(sequelize, Sequelize);
const Specility = SpecialityModel(sequelize, Sequelize);
const Patient = PatientModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
  console.log("Se creo la tabla");
});

module.exports = {
  Specility,
  User,
  Appointment,
  Patient
};
