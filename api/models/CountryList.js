const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('CountryList', {
    CID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CShortName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    CDescription: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    FlagImage: {
      type: DataTypes.STRING(4000),
      allowNull: false,
    },    
    FlagName: {
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
    tableName: 'CountryList',
    schema: 'dbo',
    timestamps: true,
    paranoid: true
  });
};
