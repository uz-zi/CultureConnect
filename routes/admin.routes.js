const express = require('express')
const router = express.Router()
const fuction = require('../controllers/admin.controller')
const {isAdmin} = require('../midlleware/jwtauthenticate')

router.get('/signIn', fuction.signInAdmin);

router.get('*', function(req, res){
    res.status(404).send('404 error: page not found');
  });

module.exports = router