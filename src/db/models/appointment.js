'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    visit_reason: DataTypes.STRING,
    appointment_type: DataTypes.STRING
  }, {});
  Appointment.associate = function(models) {
    // associations can be defined here
  };
  return Appointment;
};