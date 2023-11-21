const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("users", {
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    verificationCode: DataTypes.STRING,
    verificationCodeExpiry: DataTypes.DATE,
    isVerified: DataTypes.BOOLEAN
 });

 module.exports = User