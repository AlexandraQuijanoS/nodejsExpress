module.exports = (sequelize, type) => {
  let Appointment = sequelize.define("appointment", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    time: type.DATE,
    doctor_id: {
      type: type.INTEGER,
      // references: {
      //   model: 'user',
      //   key: 'id'
      // },
      // onDelete: 'CASCADE',
      // onUpdate: 'CASCADE'
    },
    patient_id: type.INTEGER
  }, {
    paranoid: true
  });

  // Appointment.associate = (models) => {
  //   Appointment.belongsTo(models.users, {
  //     foreignKey: 'id',
  //     target_key: 'doctor_id'
  //   });
  // }

  return Appointment;
};
