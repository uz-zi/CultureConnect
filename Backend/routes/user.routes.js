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

//--------for_social_post--------------
router.post('/add_videopost', fuction.upload_video_Post)
router.post('/add_imagepost', fuction.add_image_Post)
router.get('/socialdata', fuction.allMedia)
router.put('/upadte_userprofile', fuction.update_Profile)
router.get('/display_userdatafior_update', fuction.retrive_user_data)
router.put("/Update_video_post", fuction.update_video_Post)
router.put('/update_image_post', fuction.update_image_Post)
router.delete('/deleteVideoPost', fuction.deleteVideoPost)
router.delete('/deleteImagePost', fuction.deleteImagePost)
router.get('/getvideoPostforupdate', fuction.get_videoPost_for_update)
router.get('/getimagePostforupdate', fuction.get_imagePost_for_update)

router.get('*', function(req, res){
    res.status(404).send('404 error: page not found');
  });

module.exports = router