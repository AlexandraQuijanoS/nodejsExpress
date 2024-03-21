import { validationResult } from 'express-validator';
import { Appointment } from '../models/Appointment.js';

export const getAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.findAll();
    res.json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findOne({
      where: {
        id,
      },
    });
    if (!appointment) {
      return res.status(404).json({ message: 'No existe el paciente' });
    }
    res.json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createAppointment = async (req, res) => {
  const errors = validationResult(req);
  try {
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errores: errors.array(),
      });
    }
    const newAppoitment = await Appointment.create(req.body);
    res.json(newAppoitment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { time } = req.body;
  try {
    const appointment = await Appointment.findByPk(id);
    appointment.time = time;
    await appointment.save();
    res.json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
