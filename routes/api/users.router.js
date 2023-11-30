const express = require("express");
var router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../../db");
const { check, validationResult } = require("express-validator");
const moment = require("moment");
const jwt = require("jwt-simple");

router.post(
  "/register",
  [
    check("username", "El nombre de usuario es obligatorio").not().isEmpty(),
    check("password", "La contraseña es obligatoria").not().isEmpty(),
    check("email", "El email debe estar correcto").isEmail(),
    check("userType", "El campo tipo es obligatorio").not().isEmpty(),
    check("specialityId", "El campo especialidad es obligatorio").not().isEmpty()
  ],
  async (req, res) => {
    //Si le paso la pedition a la funcion validationREsult este me valida los campos dependiendo de los check ue haya puesto
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errores: errors.array(),
      });
    }
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
  }
);

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });
  if (user) {
    const iguales = bcrypt.compareSync(req.body.password, user.password);
    if (iguales) {
      res.json({ success: createToken(user) });
    } else {
      res.json({ error: "Error en usuario y/o contraseña" });
    }
  } else {
    res.json({ error: "Error en usuario y/o contraseña" });
  }
});

const createToken = (user) => {
  const payload = {
    usuarioId: user.id,
    createdAt: moment().unix(), // El numero de segundos que hay desde el 1 enero de 1970
    expiredAt: moment().add(30, "minutes").unix(),
  };
  return jwt.encode(payload, "frase secreta");
};

module.exports = router;
