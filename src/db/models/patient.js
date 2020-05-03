'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};