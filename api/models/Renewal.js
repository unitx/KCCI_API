const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Renewal', {
    RNID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BillNo: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    BillDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    BillPrinted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    MY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MSNo: {
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
    ReceiptAmount: {
      type: DataTypes.DECIMAL(19,5),
      allowNull: false,
    },
    Closed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    RenewalStatus: {
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
    tableName: 'Renewal',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
