'use strict';
module.exports = (sequelize, DataTypes) => {
  const Agency = sequelize.define('Agency', {
    name: DataTypes.STRING,
    plan: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {});
  Agency.associate = function(models) {
    // associations can be defined here
  };
  return Agency;
};