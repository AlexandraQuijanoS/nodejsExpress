//Con esto ya se puede trabaajr con express
import app from './app.js';
import { sequelize } from './database/db.js';
import './models/Appointment.js';
import './models/Patient.js';
import './models/User.js';
import './models/speciality.js';
import './models/DoctorSpecialities.js';

const port = 3000;

async function main() {
  try {
    await sequelize.sync({force:true});
    app.listen(port);
    console.log('El servidor esta corriendo...');
  } catch (error) {
    console.log('No ha sido posible conectar a la base de datos', error);
  }
}

main();
