import { User } from '../models/User.js';
import { Speciality } from '../models/speciality.js';

export const getSpecialities = async (req, res) => {
  try {
    const specialities = await Speciality.findAll();
    res.json(specialities);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSpeciality = async (req, res) => {
  const { id } = req.params;
  try {
    const speciality = await Speciality.findOne({
      where: {
        id,
      },
    });
    if (!speciality) {
      return res.status(404).json({ message: 'No existe la especialidad' });
    }
    res.json(speciality);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createSpeciality = async (req, res) => {
  try {
    const { speciality_name } = req.body;
    const newSpeciality = await Speciality.create(
      {
        speciality_name,
      },
      { include: User },
    );
    res.json(newSpeciality);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSpeciality = async (req, res) => {
  const { id } = req.params;
  try {
    const speciality = await Speciality.findOne({
      where: { id },
    });
    speciality.set(req.body);
    await speciality.save();
    res.json(speciality);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteSpeciality = async (req, res) => {
  const { id } = req.params;
  try {
    await Speciality.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getSpecialityUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const speciality = await Speciality.findAll({
      // where: {: id}
    });
    res.json(users);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
