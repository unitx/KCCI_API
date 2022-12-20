const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('BankBranches', {
    BBID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BankID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Bank: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BranchCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Branch: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ContactNo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    FaxNo: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'BankBranches',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
