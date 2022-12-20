const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('BusinessSubCategories', {
    BSID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BCatID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    BCatDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BSShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BSDescription: {
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
    tableName: 'BusinessSubCategories',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
