const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('BusinessCategories', {
    BCatID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BCatShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BCatDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    CreatedUser: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ModifyUser: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'BusinessCategories',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
