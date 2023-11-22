const Admin = require("../models/admin.model");
const jwtToken = require("jsonwebtoken");
const sequelize = require("../config");

const signInAdmin = async (req, res) => {
  try {
    await sequelize
      .sync()
      .then(async () => {
        await Admin.findOne({
          where: {
            Password: req.body.pass,
            Email: req.body.email,
          },
        })
          .then((data) => {
            if (!data) {
              console.error("Failed to sign in : ", error);
              res.send(new errorHandler("login failed ", 404));
            } else {
              console.log(data);
              const token = jwtToken.sign({ Role: "admin" }, "rtyui");
              res.status(200).send({
                roles: token.Role,
                accessToken: token,
              });
            }
          })
          .catch((error) => {
            console.error("Failed to sign in : ", error);
            res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to sign in : ", error);
        res.status(500).send(error.message);
      });
  } catch {
    console.error("Failed to sign in : ", error);
    res.status(500).send(error.message);
  }
};



module.exports = {signInAdmin};
