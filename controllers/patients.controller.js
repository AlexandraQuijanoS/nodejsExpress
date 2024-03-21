import { Appointment } from '../models/Appointment.js';
import { Patient } from '../models/Patient.js';

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.json(patients);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPatient = async (req, res) => {
  const { id } = req.params;
  try {
    const patient = await Patient.findOne({
      where: {
        id,
      },
    });
    if(!patient){
      return res.status(404).json({message: 'No existe el paciente'})
    }
    res.json(patient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPatient = async (req, res) => {
  try {
    const { patientName, age, email, identity_id, phone } = req.body;
    const newPatient = await Patient.create({
      patientName,
      age,
      email,
      identity_id,
      phone,
    });
    res.json(newPatient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePatient = async (req, res) => {
  const { id } = req.params;
  const { patientName, email, phone, age, identity_id } = req.body;
  try {
    const patient = await Patient.findByPk(id);
    patient.patientName = patientName;
    patient.email = email;
    patient.phone = phone;
    patient.age = age;
    patient.identity_id = identity_id;
    await patient.save();
    res.json(patient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePatient = async (req, res) => {
  const { id } = req.params;
  try {
    await Patient.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPatientAppointments = async (req, res) => {
  try{
    const {id} = req.params;
    const appointments = await Appointment.findAll({
      where: {patient_id: id}
    })
    res.json(appointments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}




