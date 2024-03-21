import { Router } from 'express';
import {
  createAppointment,
  deleteAppointment,
  getAppointment,
  getAppointments,
  updateAppointment,
} from '../../controllers/appointments.controller.js';
import { check, validationResult } from 'express-validator';

const router = Router();

router.get('/appointments', getAppointments);
router.post(
  '/appointments',
  [
    check('time', 'La hora de la cita es obligatoria').not().isEmpty(),
    check(
      'doctor_id',
      'El campo doctor por el que será atentido es obligatorio',
    )
      .not()
      .isEmpty(),
    check('patient_id', 'El campo paciente es obligatorio')
      .not()
      .isEmpty()
      .not()
      .isEmpty(),
  ],
  createAppointment,
);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);
router.get('/appointments/:id', getAppointment);

export default router;
