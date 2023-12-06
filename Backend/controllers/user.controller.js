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
          FirstName: req.body.fname,
          LastName: req.body.lname,
          Name: req.body.name,
          Email: req.body.email,
          Password: req.body.pass,
          PhoneNumber: req.body.pnum
        };

        console.log(temporaryUsers);

        await sendVerificationEmail(req.body.email, verificationCode);
        res.send('Verification code sent to email.');
    } catch (error) {
        console.error("Error in signUpUser: ", error);
        res.status(500).send(error.message);
    }
};

const verifyUser = async (req, res) => {
    try {
      console.log('Received verification code:', req.body.verificationCode);
        const { verificationCode } = req.body;
        console.log(temporaryUsers);
        const tempUser = temporaryUsers[verificationCode];
        console.log(tempUser);

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
        console.log(req.body);
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
              res.send(new errorHandler("Invalid Credentials!" , 404))
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
            console.error("Failed to sign in token not created: ", error);
            res.status(500).send(error.message);
          });
      })
      .catch((error) => {
        console.error("Failed to sign in table not cnnected: ", error);
            res.status(500).send(error.message);
      });
    }catch{
      console.error("Failed to sign in : ", error);
            res.status(500).send(error.message);
    }
  };


  let temp_forget_pass = 0;
  let temp_forgetpass_email = "";
  const verify_forget_Password_email = async (req, res) => {
    try {
        await sequelize.sync();

        const user = await User.findOne({
            where: {
                Email: req.body.email,
            }
        });

        if (user) {
            const forgetpass_verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase();
            await sendVerificationEmail(req.body.email, forgetpass_verificationCode);
            res.send("Verification code sent to your email");

            temp_forget_pass = forgetpass_verificationCode;
            temp_forgetpass_email = req.body.email;
        } else {
            res.status(404).send("Email not found");
        }
    } catch (error) {
        console.error("Error: ", error.message);
        res.status(500).send(error.message);
    }
};

let isVerified = false;
const verify_forgetpass = async (req, res) => {
  try {
      const { verificationCode } = req.body;
      if (temp_forget_pass !== verificationCode) {
        return res.status(400).send('Invalid verification code');
    }

    isVerified = true;
    res.send('User verified. You can now change your password.');
  } catch (error) {
      console.error("Error in verifyUser: ", error);
      res.status(500).send(error.message);
  }
};


const change_password = async(req, res) => {
  try{

    if (!isVerified) {
      return res.status(403).send('canot update the password');
    }

    await sequelize
    .sync()
    .then(async() => {
     await User.update(
        {
          Password: req.body.pass,
        },
        {
          where: { Email: temp_forgetpass_email }
        }
      )
        .then((data) => {
          if(!data)
          {
            res.send(new errorHandler("Email do not exist " , 404))
          }
          else{
          console.log("Successfully updated record.");
          res.status(200).send("data updated");
          }
        })
        .catch((error) => {
          console.error("Failed to update record : ", error);
          res.status(500).send(error.message);
        });
    })
    .catch((error) => {
      console.error("Failed to connect table : ", error);
      res.status(500).send(error.message);
    });
  }catch{
    console.error("Failed to update record : ", error);
    res.status(500).send(error.message);
  }
};


  module.exports = {
    signInUser,
    signUpUser,
    verifyUser,
    verify_forget_Password_email,
    verify_forgetpass,
    change_password
};