const express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

const { Appointment } = require('../../db');

router.get('/', async (req, res) => {
  const appointments = await Appointment.findAll();
  res.json(appointments);
});

router.post(
  '/',
  [
    check('time', 'La hora de la cita es obligatoria').not().isEmpty(),
    check('doctor_id', 'El campo doctor por el que será atentido es obligatorio').not().isEmpty(),
    check('patient_id', 'El campo paciente es obligatorio').not().isEmpty()
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errores: errors.array(),
      });
    }
    const appointment = await Appointment.create(req.body);
    res.json(appointment);
  },
);

router.put('/:appointmentId', async (req, res) => {
  await Appointment.update(req.body, {
    where: { id: req.params.appointmentId },
  });
  res.json({ success: 'Se ha modificado' });
});

router.delete('/:appointmentId', async (req, res) => {
  await Appointment.destroy({
    where: { id: req.params.appointmentId },
  });
  res.json({ success: 'Se ha eliminado con exito' });
});

module.exports = router;
