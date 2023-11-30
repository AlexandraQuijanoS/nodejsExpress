module.exports = (sequelize, type) => {
  let Speciality = sequelize.define("speciality", {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: type.STRING,
  }, {
    paranoid: true
  });

  Speciality.associate = () => {

  }

  return Speciality;
};
