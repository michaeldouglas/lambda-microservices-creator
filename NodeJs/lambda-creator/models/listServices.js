const sequelize = require('../library/Database/Database');


const Services = sequelize.define('services', {
  id: {
      type: sequelize.Sequelize.STRING,
      primaryKey: true,
      autoIncrement: true,
  },
  nm_service: {
      type: sequelize.Sequelize.STRING,
      allowNull: false
  }
}, {
    timestamps: true,
    paranoid: true
});

module.exports = Services;
