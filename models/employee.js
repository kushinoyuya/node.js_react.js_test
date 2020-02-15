'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    name: DataTypes.STRING,
    department: DataTypes.STRING,
    gender: DataTypes.ENUM,
    birth: DataTypes.DATE,
    joined_date: DataTypes.DATE,
    pay: DataTypes.BIGINT,
    note: DataTypes.STRING
  }, {
    underscored: true,
  });
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};