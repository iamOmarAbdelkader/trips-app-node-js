'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trip = sequelize.define('Trip', {
    hotel: DataTypes.STRING,
    city: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    meal_plan: DataTypes.TEXT,
    days: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    agency_id: DataTypes.INTEGER
  }, {});

  Trip.associate = function(models) {
    // associations can be defined here
    Trip.belongsTo(models.Agency,{ foreignKey:'agency_id'});

  };
  return Trip;
};