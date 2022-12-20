const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Bank', {
    BankID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BankShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Bank: {
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
    tableName: 'Bank',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
