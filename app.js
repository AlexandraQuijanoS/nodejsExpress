import express from 'express';
import appointmentRoutes from './routes/api/appointment.routes.js';
import patienRoutes from './routes/api/patient.routes.js';
import userRoutes from './routes/api/user.routes.js';
import specialityRoutes from './routes/api/specialities.routes.js';
import doctorSpecialitiesRoutes from './routes/api/doctorspecialities.routes.js'
import { checkToken } from './routes/middlewares.js';

// Se crea aplicacion con express

const app = express();
console.log('El servidor esta corriendo...');

//middlewares
// Permite que cada vez que envien un dato en formato
// JSON el servidor va a poder interpretarlo y metera en el
// request body
app.use(express.json());
app.use(appointmentRoutes);
app.use(patienRoutes);
app.use(userRoutes);
app.use(specialityRoutes);
app.use(doctorSpecialitiesRoutes);

//con verificacion de token
// app.use(checkToken, specialityRoutes);

export default app;
