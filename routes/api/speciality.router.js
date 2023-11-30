const express = require("express");
var router = express.Router();

const { Specility } = require("../../db");

router.get("/", async (req, res) => {
  const specialities = await Specility.findAll();
  res.json(specialities);
});

router.post("/", async (req, res) => {
  const speciality = await Specility.create(req.body);
  res.json(speciality);
});

router.put("/:specialityId", async (req, res) => {
  await Specility.update(req.body, {
    where: { id: req.params.specialityId },
  });
  res.json({ success: "Se ha modificado" });
});

router.delete("/:specialityId", async (req, res) => {
  await Specility.destroy({
    where: { id: req.params.specialityId },
  });
  res.json({ success: "Se ha eliminado con exito" });
});

module.exports = router;
