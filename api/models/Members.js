const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Members', {
    MSID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PMSNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    MSNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    EstablishDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    Address1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Address2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PostalCode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Town: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    State: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Country: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NTN: {
      type: DataTypes.STRING(255),
      allowNull: false
    },  
    STRN: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Remarks: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RepTitle: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    RepName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RepStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RepCNIC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ContactNo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    BankID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    BBranchID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    IsActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    MY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    PropserMSNo:{
      type: DataTypes.STRING(255),
      allowNull: true,
      defalutValue:0
    },
    SeconderMSNo:{
      type: DataTypes.STRING(255),
      allowNull: true,
      defalutValue:0
    },
    Status:{
      type: DataTypes.STRING(255),
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
    DeletedUser: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Members',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
