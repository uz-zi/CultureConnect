const express = require('express')
const router = express.Router()
const check = require("../midlleware/checkDuplicates")
const fuction = require('../controllers/user.controller')
const {isUser} = require('../midlleware/jwtauthenticate')

router.post('/signUpUser' , check , fuction.signUpUser);
router.get('/signIn' , fuction.signInUser);
router.post('/verify', fuction.verifyUser) 

router.get('*', function(req, res){
    res.status(404).send('404 error: page not found');
  });

module.exports = router