module.exports = (sequelize, type) => {
    let User = sequelize.define("user", {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: type.STRING,
        password: type.STRING,
        email: type.STRING,
        userType: type.INTEGER,
        speciality_id: type.STRING
      },{
        paranoid: true
      });

    // User.associate = (models) => {
    //   User.hasMany(models.appointments, {
    //     foreignKey: 'doctor_id'
    //   });
    // }

    return User
}
