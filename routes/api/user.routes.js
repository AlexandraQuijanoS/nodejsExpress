import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getUserAppointments,
  getUsers,
  login,
  updateUser,
} from '../../controllers/users.controller.js';
import { check } from 'express-validator';

const router = Router();

router.get('/users', getUsers);
router.post(
  '/users',
  [
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check('email', 'El email debe estar correcto').isEmail(),
    check('userType', 'El campo tipo es obligatorio').not().isEmpty(),
    check('speciality_id', 'El campo especialidad es obligatorio')
      .not()
      .isEmpty(),
  ],
  createUser,
);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post('/users/login', login);

router.get('/users/:id/appointments', getUserAppointments);

export default router;
