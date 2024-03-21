import { validationResult } from 'express-validator';
import { User } from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createToken } from './token.js';
import { Appointment } from '../models/Appointment.js';
import { Speciality } from '../models/speciality.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(user);
    if (user) {
      const iguales = bcrypt.compareSync(req.body.password, user.password);
      if (iguales) {
        res.json({ success: createToken(user) });
      } else {
        res.json({ error: 'Error en usuario y/o contraseña' });
      }
    } else {
      res.json({ error: 'Error en usuario y/o contraseña' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errores: errors.array(),
      });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body, { include: Speciality });
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: id,
    });
    user.set(req.body);
    res.json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUserAppointments = async (req, res) => {
  try {
    const { id } = req.params;
    const users = await Appointment.findAll({
      where: { doctor_id: id },
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
