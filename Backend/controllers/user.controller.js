const User = require("../models/user.model");
const sequelize = require("../config");
const jwtToken = require("jsonwebtoken");
const crypto = require('crypto');
const { sendVerificationEmail } = require('./nodemailer.emailservice');
const Image_Post = require("../models/imagePost.model")
const Video_Post = require("../models/videoPost.model")
const multer = require("multer");
const errorHandler = require("../utlis/errorhandandler")



//---------get sepecific social post data---------

const get_imagePost_for_update = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Image_Post.findOne({
        where: {
          id: req.body.id
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data got");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


const get_videoPost_for_update = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Video_Post.findOne({
        where: {
          id: req.body.id
        },
      })
        .then((rs) => {
          console.log(rs);
          res.send("data got");
        })
        .catch((error) => {
          console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
    });
};


//-------------DELETE SOCIAL POST--------------
const deleteImagePost = async (req, res) => {
  try {
    await sequelize.sync();

    const result = await Image_Post.destroy({
      where: { id: req.body.id },
    });

    if (!result) {
      return res.status(404).send(new errorHandler("ID does not exist", 404));
    }

    console.log("Successfully deleted record.");
    return res.status(200).send("Data deleted");
  } catch (error) {
    console.error("Failed to delete record:", error);
    return res.status(500).send(error.message);
  }
};


const deleteVideoPost = async (req, res) => {
  try {
    await sequelize.sync();

    const result = await Video_Post.destroy({
      where: { id: req.body.id },
    });

    if (!result) {
      return res.status(404).send(new errorHandler("ID does not exist", 404));
    }

    console.log("Successfully deleted record.");
    return res.status(200).send("Data deleted");
  } catch (error) {
    console.error("Failed to delete record:", error);
    return res.status(500).send(error.message);
  }
};


//---------setting of multer---------
const image_storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./uploads/images");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const image_fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG)$/)) {
      req.fileValidationError = 'Only image files are allowed!';
      return cb(new Error('Only image files are allowed!'), false);
  }
  cb(null, true);
};

const image_upload = multer({ 
  storage: image_storage,
  fileFilter: image_fileFilter
});



const video_storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "./uploads/videos");
  },
  filename: function (req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const video_fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(mp4|MP4|mov|MOV)$/)) {
      req.fileValidationError = 'Only video files are allowed!';
      return cb(new Error('Only video files are allowed!'), false);
  }
  cb(null, true);
};

const add_video_post = multer({ 
  storage: video_storage,
  fileFilter: video_fileFilter
});


//------------retrive user data for update profile---------
const retrive_user_data = async (req, res) => {
  try {
    await sequelize.sync();

    const images = await User.findAll({ where: { id: req.body.id } });

    if (images.length === 0) {
      return res.status(404).send('No data found');
    }

    console.log("data dispalyed");
    res.status(200).send(images);

  } catch (error) {
    console.error("Error fetching media: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};



//------------UPDATE PROFILE------------
const update_Profile = async (req, res) => {
  image_upload.fields([{ name: 'cover_image', maxCount: 1 }, { name: 'profile_image', maxCount: 1 }])(req, res, (err) => {
      if (req.fileValidationError) {
          return res.status(400).send(req.fileValidationError);
      }
      if (err) {
          return res.status(500).send(err.message);
      }
      const coverImagePath = req.files['cover_image'] ? req.files['cover_image'][0].path : null;
      const profileImagePath = req.files['profile_image'] ? req.files['profile_image'][0].path : null;

      sequelize
          .sync()
          .then(() => {
              User.update(
                  {
                      Name: req.body.name,
                      FirstName: req.body.fname,
                      LastName: req.body.lname,
                      PhoneNumber: req.body.pnum,
                      Cover_photo: coverImagePath,
                      Profile_pic: profileImagePath
                  },
                  {
                      where: { id: req.body.id }
                  }
              )
              .then((data) => {
                  if (!data) {
                      res.send(new errorHandler("No data updated", 404));
                  } else {
                      console.log(data);
                      res.status(200).send("Data updated");
                  }
              })
              .catch((error) => {
                  console.error("Failed to update record: ", error);
                  res.status(500).send(error.message);
              });
          })
          .catch((error) => {
              console.error("Failed to connect table: ", error);
              res.status(500).send(error.message);
          });
  });
};

//------------------------------------------------------------------------------------------test-----------------------
//-------RETRIVE ALL MEDIA DATA----------
const allMedia = async (req, res) => {
  try {
    await sequelize.sync();

    const Userphoto = await User.findAll({ where: { id: req.body.id } });
    const images = await Image_Post.findAll({ where: { UserID: req.body.id } });
    const videos = await Video_Post.findAll({ where: { UserId: req.body.id } });

    if (images.length === 0 && videos.length === 0) {
      return res.status(404).send('No images or videos found for the given user ID');
    }
    const combinedMedia = images.concat(videos);

    combinedMedia.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    console.log("Media fetched and sorted successfully.");
    res.status(200).send({Userphoto, combinedMedia});

  } catch (error) {
    console.error("Error fetching media: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};



//----------IMAGE-----------

const update_image_Post = async (req, res) => {
  try {
    await image_upload.single('image')(req, res, async (err) => {
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }
      if (err) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Images table synced successfully!");

        
        await Image_Post.update({
          picture: req.file.path,
          img_caption: req.body.caption
        }, {
          where: {
            id: req.body.id
          }
        });
        

        console.log("image updated:");
        res.send("Successfully updtaed record for the uploaded image.");
      } catch (error) {
        console.error("Failed to update new record: ", error);
        res.status(500).send(error.message);
      }
    });
  } catch (error) {
    console.error("Failed to process upload: ", error);
    res.status(500).send(error.message);
  }
};



const add_image_Post = async (req, res) => {
  try {
    await image_upload.single('image')(req, res, async (err) => {
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }
      if (err) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Images table synced successfully!");

        
        await Image_Post.create({
          picture: req.file.path,
          UserID: req.body.id,
          img_caption: req.body.caption
        });

        console.log("Uploaded file:");
        res.send("Successfully added record for the uploaded image.");
      } catch (error) {
        console.error("Failed to create new record: ", error);
        res.status(500).send(error.message);
      }
    });
  } catch (error) {
    console.error("Failed to process upload: ", error);
    res.status(500).send(error.message);
  }
};


//----------VIDEO-----------

const update_video_Post = async (req, res) => {
  try {
    await add_video_post.single('video')(req, res, async (err) => {
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }
      if (err) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Video table synced successfully!");

        await Video_Post.update({
          Video: req.file.path,
          Captions: req.body.caption
        }, {
          where: {
            id: req.body.id
          }
        });

        console.log("video updated");
        res.send("Successfully updated record for the video.");
      } catch (error) {
        console.error("Failed to update new record: ", error);
        res.status(500).send(error.message);
      }
    });
  } catch (error) {
    console.error("Failed to process upload: ", error);
    res.status(500).send(error.message);
  }
};


const upload_video_Post = async (req, res) => {
  try {
    await add_video_post.single('video')(req, res, async (err) => {
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }
      if (err) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Video table synced successfully!");

        await Video_Post.create({
          Video: req.file.path,
          Captions: req.body.text,
          UserId: req.body.id 
        });

        console.log("Uploaded file:", req.file);
        res.send("Successfully added record for the video.");
      } catch (error) {
        console.error("Failed to create new record: ", error);
        res.status(500).send(error.message);
      }
    });
  } catch (error) {
    console.error("Failed to process upload: ", error);
    res.status(500).send(error.message);
  }
};




////---------------------SignUP----------------

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

const signInUser = async (req, res) => {
  try {
    await sequelize.sync();
    const user = await User.findOne({
      where: {
        Password: req.body.pass,
        Email: req.body.email,
      }
    });

    if (!user) {
      console.error("Invalid Credentials!");
      res.send(new errorHandler("Invalid Credentials!", 404));
    } else {
      const token = jwtToken.sign({ Role: "user" }, 'dfghjk');

      const user_ID = await User.findOne({
        attributes: ['id'],
        where: {
          Email: req.body.email
        }
      });

      console.log(user);

      res.status(200).send({
        user_ID,
        roles: token.Role,
        accessToken: token
      });
    }
  } catch (error) {
    console.error("Failed to sign in token not created: ", error);
    res.status(500).send(error.message);
  }
};



//---------------------------ForgetPASSWORD----------------------
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
    change_password,
    upload_video_Post,
    add_image_Post,
    allMedia,
    update_Profile,
    retrive_user_data,
    update_image_Post,
    update_video_Post,
    deleteImagePost,
    deleteVideoPost,
    get_imagePost_for_update,
    get_videoPost_for_update
};