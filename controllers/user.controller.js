const User = require("../models/user.model");
const sequelize = require("../config");
const jwtToken = require("jsonwebtoken");
const crypto = require('crypto');
const { sendVerificationEmail } = require('./nodemailer.emailservice');



////---------------------ADD----------------

let temporaryUsers = {};

const signUpUser = async (req, res) => {
    try {
        const verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase();
        
        temporaryUsers[verificationCode] = {
            UserID: req.body.id,
            Name: req.body.name,
            Email: req.body.email,
            Password: req.body.pass
        };

        await sendVerificationEmail(req.body.email, verificationCode);

        res.send('Verification code sent to email.');
    } catch (error) {
        console.error("Error in signUpUser: ", error);
        res.status(500).send(error.message);
    }
};

const verifyUser = async (req, res) => {
    try {
        const { verificationCode } = req.body;
        const tempUser = temporaryUsers[verificationCode];

        if (!tempUser) {
            return res.status(400).send('Invalid verification code');
        }

        const newUser = await User.create({
            ...tempUser,
            isVerified: true
        });

        delete temporaryUsers[verificationCode];

        res.send('User verified and registered successfully');
    } catch (error) {
        console.error("Error in verifyUser: ", error);
        res.status(500).send(error.message);
    }
};

const signInUser =async (req, res) => {
    try{
      await sequelize
      .sync()
      .then(async() => {
        await User.findOne({
          where: {
            Password: req.body.pass,
            Email: req.body.email,
          },
        })
          .then((data) => {
            if(!data)
            {
              console.error("Failed to sign in : ", error);
              res.send(new errorHandler("login failed " , 404))
            }
            else{
            console.log(data);
            const token = jwtToken.sign({ Role : "user"}, 'dfghjk')
            res.status(200).send({ 
              roles: token.Role,
              accessToken: token
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
    }catch{
      console.error("Failed to sign in : ", error);
            res.status(500).send(error.message);
    }
  };

  module.exports = {
    signInUser,
    signUpUser,
    verifyUser
};