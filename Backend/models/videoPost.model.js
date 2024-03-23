const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config");

//------create table with feilds--------
const Post = sequelize.define("videoPost", {
  UserID: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Captions: {
    type: DataTypes.STRING
  },
  Video: {
    type: DataTypes.STRING
  }
});

module.exports = Post;
