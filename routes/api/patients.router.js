const express = require("express");
var router = express.Router();
const { check, validationResult } = require('express-validator');

const { Patient } = require('../../db');

router.get('/', async (req, res) => {
  const patients = await Patient.findAll();
  res.json(patients);
});

router.post(
  '/',
  [
    check('patientName', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El correo tiene un formato incorrecto').isEmail(),
    check('age', 'La edad es un campo obligatorio').not().isEmpty()
      .not()
      .isEmpty(),
    check('identity_id', 'El documento de identidad es un campo obligatorio').not().isEmpty()
      .not()
      .isEmpty(),
    check('phone', 'El telefono es un campo obligatorio').not().isEmpty()
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errores: errors.array(),
      });
    }
    const patient = await Patient.create(req.body);
    res.json(patient);
  },
);

router.put('/:patientId', async (req, res) => {
  await Patient.update(req.body, {
    where: { id: req.params.patientId },
  });
  res.json({ success: 'Se ha modificado' });
});

router.delete('/:patientId', async (req, res) => {
  await Patient.destroy({
    where: { id: req.params.patientId },
  });
  res.json({ success: 'Se ha eliminado con exito' });
});

module.exports = router;
