const sequelize = require("../config")
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("users", {
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  } , 
  FirstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    PhoneNumber: {
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
    Cover_photo: {
      type: DataTypes.STRING,
    },
    Profile_pic: {
      type: DataTypes.STRING,
    },
    verificationCode: DataTypes.STRING,
    isVerified: DataTypes.BOOLEAN
 });

 module.exports = User