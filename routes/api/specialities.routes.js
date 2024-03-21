import { Router } from 'express';
import {
  createSpeciality,
  deleteSpeciality,
  getSpecialities,
  getSpecialityUsers,
  getSpeciality,
  updateSpeciality,
} from '../../controllers/specialities.controller.js';
import { check } from 'express-validator';

const router = Router();

router.get('/specialities', getSpecialities);
router.post(
  '/specialities',
  [
    check('speciality_name', 'El nombre de usuario es obligatorio')
      .not()
      .isEmpty(),
  ],
  createSpeciality,
);
router.put('/specialities/:id', updateSpeciality);
router.delete('/specialities/:id', deleteSpeciality);
router.get('/specialities/:id', getSpeciality);

router.get('/specialities/:id/users', getSpecialityUsers);

export default router;
