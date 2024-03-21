
import { User } from "../models/User.js";
import { Speciality } from "../models/speciality.js";
import { DoctorSpecialities } from "../models/DoctorSpecialities.js";
import '../models/DoctorSpecialities.js';

export const getDoctorSpecialities = (req, res) => {
  try{
    const users = User.findAll({
      include: {
        model: Speciality
      }
    })
    res.json(users)
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

export const getSpecialitiesOfDoctors = (req, res) => {
  try{
    const specialities = Speciality.findAll({
      include: {
        model: User
      }
    })
    res.json(specialities)
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}

// User.sync()
// Speciality.sync()
// DoctorSpecialities.sync()

