import { Router } from 'express';
import {
  createPatient,
  deletePatient,
  getPatient,
  getPatientAppointments,
  getPatients,
  updatePatient,
} from '../../controllers/patients.controller.js';
import { check, validationResult } from 'express-validator';

const router = Router();

router.get('/patients', getPatients);
router.post(
  '/patients',
  [
    check('patientName', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo tiene un formato incorrecto').isEmail(),
    check('age', 'La edad es un campo obligatorio')
      .not()
      .isEmpty()
      .not()
      .isEmpty(),
    check('identity_id', 'El documento de identidad es un campo obligatorio')
      .not()
      .isEmpty()
      .not()
      .isEmpty(),
    check('phone', 'El telefono es un campo obligatorio')
      .not()
      .isEmpty()
      .not()
      .isEmpty(),
  ],
  createPatient,
);
router.put('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);
router.get('/patients/:id', getPatient);

router.get('/patients/:id/appointments', getPatientAppointments);

export default router;
