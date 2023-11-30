module.exports = (sequelize, type) => {
  let Patient = sequelize.define("patient", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    patientName: type.STRING,
    email: type.STRING,
    age: type.INTEGER,
    identity_id: type.INTEGER,
    phone: type.STRING
  }, {
    paranoid: true
  });

  Patient.associate = () => {

  }

  return Patient;
};
