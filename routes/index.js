const apiSpecilitiesRouter = require('./api/speciality.router');
const apiUsersRouter = require('./api/users.router');
const apiPatientsRouter = require('./api/patients.router');
const apiAppointmentsRouter = require('./api/appointments.router')
const middleware = require('./middlewares');

function routerApi(app) {
  app.use('/speciality', middleware.checkToken, apiSpecilitiesRouter);
  app.use('/patient', middleware.checkToken, apiPatientsRouter);
  app.use('/appointment', middleware.checkToken, apiAppointmentsRouter);
  app.use('/users', apiUsersRouter);
}

module.exports = { routerApi };
