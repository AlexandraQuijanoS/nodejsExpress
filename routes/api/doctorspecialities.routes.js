import { Router } from 'express';
import {
  getDoctorSpecialities,
  getSpecialitiesOfDoctors
} from '../../controllers/doctorspecialities.controller.js';

const router = Router();

router.get('/doctors/specilities', getDoctorSpecialities);
router.get('/specilities/doctors', getSpecialitiesOfDoctors);


export default router;
