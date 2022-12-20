const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('AttachDocList', {
    ADID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ADShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    ADDescription: {
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
    tableName: 'AttachDocList',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
