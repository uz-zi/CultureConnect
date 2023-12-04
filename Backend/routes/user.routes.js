const express = require('express')
const router = express.Router()
const check = require("../midlleware/checkDuplicates")
const fuction = require('../controllers/user.controller')
const {isUser} = require('../midlleware/jwtauthenticate')

router.post('/signUpUser' , check , fuction.signUpUser);
router.post('/signIn' , fuction.signInUser);
router.post('/verify', fuction.verifyUser); 
router.post('/forgetpassword', fuction.verify_forget_Password_email);
router.post('/verify_forgetpassword', fuction.verify_forgetpass);
router.post('/changepassword', fuction.change_password)

router.get('*', function(req, res){
    res.status(404).send('404 error: page not found');
  });

module.exports = router