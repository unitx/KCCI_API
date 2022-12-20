const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('ReceiptType', {
    RTID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RTShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ReceiptType: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ReceiptRate: {
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
    tableName: 'ReceiptType',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
