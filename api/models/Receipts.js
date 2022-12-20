const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Receipts', {
    RecID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MSID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    MSNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CompanyName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    ReceiptNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ReceiptDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    IsAdvance: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RTID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ReceiptType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ReceiptAmount: {
      type: DataTypes.DECIMAL(19,5),
      allowNull: false,
    },
    BankID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Bank: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BBID: {
      type: DataTypes.INTEGER,
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
    PMID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PaymentMethod: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ChallanDate:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ChallanNo:{
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ChallanAmount:{
      type: DataTypes.DECIMAL(19,5),
      allowNull: false,
    },
    MY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    FY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Remarks: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ReceiptStatus: {
      type: DataTypes.STRING(255),
      allowNull: false,
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
    tableName: 'Receipts',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
