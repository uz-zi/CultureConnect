const User = require("../models/user.model");
const sequelize = require("../config");
const jwtToken = require("jsonwebtoken");
const crypto = require('crypto');
const { sendVerificationEmail, report_confirm_email } = require('./nodemailer.emailservice');
const Image_Post = require("../models/imagePost.model")
const Video_Post = require("../models/videoPost.model")
const multer = require("multer");
const errorHandler = require("../utlis/errorhandandler")
const { Op } = require('sequelize');
const Native = require("../models/native.model")
const Reports = require("../models/Reports.model")
const NotificationsOpenOrNot = require("../models/notfication_open_or_not")
const Notification = require("../models/notification.model")
const Payment = require("../models/Payment.model")

const Chatbox = require("../models/chatbox.model")

const { OpenAI } = require('openai');

require('dotenv').config();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const chatgpt = async(req,res) => {
    

    const model_name = "gpt-4";
  async function getCategoryCountryFromModel(prompt) {
    try {
      const response = await openai.chat.completions.create({
        model: model_name,
        messages: [
          { role: "user", content: prompt }
        ],
      });
      return response.choices[0].message.content
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }


  const model2_name = "gpt-4";
  async function get_response_from_model(prompt) {
    try {
      const response = await openai.chat.completions.create({
        model: model2_name,
        messages: [
          { role: "user", content: prompt }
        ],
      });
      return response.choices[0].message.content
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  function baseForm(word) {
    if (word.endsWith('ies')) {
      return word.slice(0, -3) + 'y';
    } else if (word.endsWith('es')) {
      return word.slice(0, -2);
    } else if (word.endsWith('s')) {
      return word.slice(0, -1);
    }
    return word;
  }
  
  function checkConditions(category, country) {
    // List of predefined words in their base form
    const predefinedWords = [
      "Geography",
      "Historical Place",
      "Culture",
      "Famous Place",
      "Festival",
      "Community",
      "Event",
      "History",
      "Food",
      "Music",
      "Landmark",
      "Architecture",
      "Monument",
      "Housing",
      "Transportation",
      "Tradition",
      "Religion",
      "Education",
      "Location",
      "Hospitality",
      "Islam",
      "City",
      "Dish",
      "Cuisine",
      "Language",
      "Tourism"
    ];
  
    const simplifiedPredefinedWords = predefinedWords.map(w => baseForm(w.toLowerCase()));
  
    const condition1 = simplifiedPredefinedWords.includes(baseForm(category.toLowerCase()));
    const condition2 = country.trim().toLowerCase() === "pakistan";
  
    return condition1 && condition2;
  }
  
  const promptInput = req.body.promptinput;
  const validationPrompt = `${promptInput} only answer me in with one word:\n1. major category\n2. country name from which this prompt is related`;

  try {
    const response = await getCategoryCountryFromModel(validationPrompt);

    
    const lines = response.split('\n');
    if (lines.length >= 2) {
      const category = lines[0].split('. ')[1]; // Assuming the format "1. Category"
      const country = lines[1].split('. ')[1]; // Assuming the format "2. Country"

      if (checkConditions(category, country)) {
        // Assuming getResponseFromModel is defined and returns a promise
        const promptResponse = await get_response_from_model(promptInput);
        res.status(200).send({ response: promptResponse, validationResponse: response });
        console.log(promptResponse)
      } else {
        res.status(400).send(`Sorry, I can't answer this. I can only answer queries related to Pakistani culture, festivals, and places. Validation Response: ${response}`);
        console.log("400")
      }
    } else {
      res.status(401).send("kindly please reenter your query");
      console.log("401")
    }
  } catch (error) {
    res.status(500).send("kindly reenter your query");
    console.log("500")
  }

  

}


const allSocialMediaPosts = async (req, res) => {
  try {
    await sequelize.sync();

    const excludedUserId = req.query.id; 

    const AllUsersID = await User.findAll({
      where: {
        UserID: { [Op.ne]: excludedUserId }
      },
      attributes: ['UserID']
    });

    const AllUsersIDs = [...new Set(AllUsersID.map(entry => entry.UserID))];


    console.log(AllUsersIDs)

    const Userphoto = await User.findAll({ where: { UserID: { [Op.in]: AllUsersIDs } } });
    const images = await Image_Post.findAll({  where: { UserID: { [Op.in]: AllUsersIDs } } });
    const videos = await Video_Post.findAll({ where: { UserID: { [Op.in]: AllUsersIDs } } });


    const combinedMedia = images.concat(videos);

    if (images.length === 0 && videos.length === 0) {
      console.log("No images or videos found for the given user ID.");
      return res.status(200).send({ Userphoto, combinedMedia: [] });
    }

    combinedMedia.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    console.log("Media fetched and sorted successfully.");
    res.status(200).send({Userphoto, combinedMedia});

  } catch (error) {
    console.error("Error fetching media: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};



const check_chat_exist_or_not = async (req, res) => {
  const senderId = req.query.sender_id; 
  const receiverId = req.query.id; 

  console.log( "==============================",{ senderId, receiverId });

  try {
    const existingChat = await Chatbox.findOne({
      where: {
        sender_id: senderId,
        Receiver_Id: receiverId, 
      }
    });

    if (!existingChat) {
      const newChat = await Chatbox.create({
        sender_id: senderId,
        Receiver_Id: receiverId,
      });
      console.log("New chat saved:", newChat);
      res.status(200).send("New chat saved");
    } else {
      res.status(203).send("Chat already exists");
    }
  } catch (error) {
    console.error("Error checking or creating chat:", error);
    res.status(500).send("Internal server error");
  }
};


const add_chats = async (req, res) => {
  try {
    await sequelize.sync();

    const senderId = req.query.sender_id; 

    const userId = await Chatbox.findAll({
      attributes: ['Receiver_Id'], 
      where: {
        sender_id: senderId 
      }
    });
    console.log("-------------------------------",userId)
    const receiverIds = [...new Set(userId.map(entry => entry.Receiver_Id))];

    // Fetch user details for all receiver IDs
    const users = await User.findAll({
      where: { UserID: { [Op.in]: receiverIds } },
      attributes: ['UserID', 'Name', 'Profile_pic']
    });

    const previousChats = await Chatbox.findAll({
      where: {
        [Op.or]: [
          { sender_id: senderId},
        ]
      },
      order: [['createdAt', 'ASC']] 
    });

    console.log("User photo:", users);

    

    res.status(200).send({ users, previousChats });

  } catch (error) {
    console.error("Error in operation: ", error.message);
    res.status(500).send('Internal Server Error');
  }
}





const allusers = async (req, res) => {
  try {
    const excludedUserId = req.query.excludeId;

    // Validate excludedUserId if needed

    const users = await User.findAll({
      where: {
        UserID: { [Op.ne]: excludedUserId }
      },
      attributes: ['UserID', 'Name', 'Profile_pic', 'is_Online']
    });

    res.send(users);
  } catch (error) {
    console.error("Failed to retrieve data: ", error);
    res.status(500).send("Failed to retrieve data");
  }
};


const see_other_user_profile = async (req, res) => {
  try {
    await sequelize.sync();

    const Userphoto = await User.findOne({ where: { UserID: req.query.id }, attributes: ['UserID', 'Name', 'Profile_pic', 'Cover_photo'] });
    const images = await Image_Post.findAll({ where: { UserID: req.query.id } });
    const videos = await Video_Post.findAll({ where: { UserID: req.query.id } });

    console.log("-----------", Userphoto)


    const combinedMedia = images.concat(videos);

    if (images.length === 0 && videos.length === 0) {
      console.log("No images or videos found for the given user ID.");
      return res.status(200).send({ Userphoto, combinedMedia: [] });
    }

    combinedMedia.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    console.log("Media fetched and sorted successfully.", combinedMedia);
    res.status(200).send({Userphoto, combinedMedia});

  } catch (error) {
    console.error("Error fetching media: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};








//---------get sepecific social post data---------

const get_imagePost_for_update = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Image_Post.findOne({
        where: {
          UserID: req.body.id
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
          UserID: req.body.id
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
      where: { UserID: req.body.id },
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
      where: { UserID: req.body.id },
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

    console.log(req.query.id);

    // Use findOne to get a single user object
    const user = await User.findOne({ where: { UserID: req.query.id } });

    if (!user) {
      return res.status(404).send('No user found');
    }

    console.log("User data displayed");
    res.status(200).send(user); // Send the user object directly

  } catch (error) {
    console.error("Error fetching user data: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};



//------------UPDATE PROFILE------------
const update_Profile = async (req, res) => {
  image_upload.fields([{ name: 'cover_image', maxCount: 1 }, { name: 'profile_image', maxCount: 1 }])(req, res, async (err) => {
    if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
    }
    if (err) {
        return res.status(500).send(err.message);
    }

    try {
      // Determine paths for cover and profile images
      const coverImagePath = req.files['cover_image'] ? req.files['cover_image'][0].path : null;
      const profileImagePath = req.files['profile_image'] ? req.files['profile_image'][0].path : null;

      // Prepare the update data
      const updateData = {
        Name: req.body.name,
        FirstName: req.body.fname,
        LastName: req.body.lname,
        PhoneNumber: req.body.pnum,
      };

      // Update image paths only if new images are provided
      if (coverImagePath) {
        updateData.Cover_photo = coverImagePath;
      }
      if (profileImagePath) {
        updateData.Profile_pic = profileImagePath;
      }

      // Update user profile in the database
      const [updatedRows] = await User.update(updateData, { where: { UserID: req.body.id } });
      if (updatedRows === 0) {
        res.status(404).send("User not found or no data updated");
      } else {
        res.status(200).send("Data updated successfully");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      res.status(500).send(error.message);
    }
  });
};



//------------------------------------------------------------------------------------------test-----------------------
//-------RETRIVE ALL MEDIA DATA----------
const allMedia = async (req, res) => {
  try {
    await sequelize.sync();

    const Userphoto = await User.findAll({ where: { UserID: req.query.id } });
    const images = await Image_Post.findAll({ where: { UserID: req.query.id } });
    const videos = await Video_Post.findAll({ where: { UserID: req.query.id } });


    const combinedMedia = images.concat(videos);

    if (images.length === 0 && videos.length === 0) {
      console.log("No images or videos found for the given user ID.");
      return res.status(200).send({ Userphoto, combinedMedia: [] });
    }

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
      if (err && !req.body.existingImagePath) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Images table synced successfully!");

        const imagePath = req.file ? req.file.path : req.body.existingImagePath;

        await Image_Post.update({
          picture: imagePath,
          img_caption: req.body.caption
        }, {
          where: {
            UserID: req.body.id
          }
        });

        console.log("image updated:");
        res.send("Successfully updated record for the image.");
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
      if (err && !req.body.existingVideoPath) {
        return res.status(500).send(err.message);
      }

      try {
        await sequelize.sync();
        console.log("Video table synced successfully!");

        const videoPath = req.file ? req.file.path : req.body.existingVideoPath;

        await Video_Post.update({
          Video: videoPath,
          Captions: req.body.caption
        }, {
          where: {
            UserID: req.body.id
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
          UserID: req.body.id 
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
  let counter = 0;  
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
            role: "user",
            isVerified: true
        });

        await NotificationsOpenOrNot.create({
          UserEmail: tempUser.Email
        })


        console.log("------------email", tempUser.Email)
        delete temporaryUsers[verificationCode];

        res.send('User verified and registered successfully');
        console.log("-----------registered");
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
      res.status(401).send("Invalid Credentials");
    } else {
      user.is_Online = true;
      await user.save();
      const token = jwtToken.sign({ role: "user" }, 'dfghjk');

      const user_ID = await User.findOne({
        attributes: ['UserID', 'role'],
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
            res.send("Verification code sent to your email")
            console.log(forgetpass_verificationCode);

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


const logout = async (req, res) => {
  const userId = req.query.id;
  if (!userId) {
    return res.status(400).send('User ID must be provided');
  }

  try {
    const user = await User.findOne({ where: { UserID: userId } });
    if (!user) {
      return res.status(404).send('No user found');
    }

    await user.update({ is_Online: false });

    const updatedUser = await User.findOne({ where: { UserID: userId } });
    console.log("Successfully logged out. User is online:", updatedUser.is_Online);

    res.status(200).send(updatedUser); 
  } catch (error) {
    console.error("Error during logout: ", error.message);
    res.status(500).send('Internal Server Error');
  }
};


const get_email_of_user_for_report = async (req, res) => {
  try {
    const Id = req.query.id;

    let emailRecord = await User.findOne({
      where: { UserID: Id },
      attributes: ['Email']
    });

    if (!emailRecord) {
      emailRecord = await Native.findOne({
        where: { UserID: Id },
        attributes: ['Email']
      });
    }

    if (emailRecord) {
      res.send(emailRecord);
      console.log("-----------email", emailRecord)
    } else {
      res.status(404).send("Email not found for the given UserID");
    }
  } catch (error) {
    console.error("Failed to retrieve data: ", error);
    res.status(500).send("Failed to retrieve data");
  }
};



const saveTheReportDataInModel = async (req, res) => {
  try {
    await Reports.create({
      Reported_Post_ID: req.body.post_id, 
      postType: req.body.PostType,
      Reporter_email: req.body.Reporter_Email,
      reportjustification: req.body.ReportJustification,
      Reporttitle: req.body.report_tile
    });


    await report_confirm_email(req.body.Reporter_Email);
    res.status(201).send({ message: "Report successfully submitted and email sent." });
  } catch (error) {
    console.error("Failed to save report data: ", error);
    res.status(500).send({ message: "Failed to save report data" });
  }
};


const check_new_notification_or_not = async (req, res) => {

  const Id = req.query.id;

  console.log("-------------id coming from frontend is", Id)
  try{

  let emailRecord = await User.findOne({
    where: { UserID: Id },
    attributes: ['Email']
  });

  if (!emailRecord) {
    emailRecord = await Native.findOne({
      where: { UserID: Id },
      attributes: ['Email']
    });
  }

  console.log("---------------email found is", emailRecord)

  const Email = emailRecord ? emailRecord.dataValues.Email : null;

  const status = await NotificationsOpenOrNot.findOne({
    where: {UserEmail: Email}
  });

  res.send(status.Notification_status)

  console.log("----------------status sending to frontend is", status.Notification_status)
}
catch(error) {
  console.error("Error fetching status: ", error);
  res.status(500).send("Error fetching status");
}



}


const fetchAllNotifications = async (req, res) => {

  const Id = req.query.id;
  console.log("-------------id coming from frontend is", Id)
  try {
    const notifications = await Notification.findAll({
      
      order: [['createdAt', 'DESC']]
    });

    let emailRecord = await User.findOne({
      where: { UserID: Id },
      attributes: ['Email']
    });

    if (!emailRecord) {
      emailRecord = await Native.findOne({
        where: { UserID: Id },
        attributes: ['Email']
      });
    }

    const Email = emailRecord ? emailRecord.dataValues.Email : null;

    await NotificationsOpenOrNot.update({ Notification_status:false }, {
      where: {UserEmail: Email}
    });


    console.log("------------------------------state turn into false" )
    res.json(notifications);

  } catch (error) {
    console.error("Error fetching notifications: ", error);
    res.status(500).send("Error fetching notifications");
  }



}

//--------------------------------------------------------------------------------------payment method

const paymentPicStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./uploads/payment_pics");
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Configure file filter for image files
const paymentPicFileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
        req.fileValidationError = "Only image files are allowed!";
        return cb(new Error("Only image files are allowed!"), false);
    }
    cb(null, true);
};

// Set up Multer for image upload
const paymentPicUpload = multer({
    storage: paymentPicStorage,
    fileFilter: paymentPicFileFilter
});

const Payment_from_user = async (req, res) => {
    try {
        await paymentPicUpload.single('Payment_Pic')(req, res, async (err) => {
            if (req.fileValidationError) {
                return res.status(400).send(req.fileValidationError);
            }
            if (err) {
                return res.status(500).send(err.message);
            }

            try {
              const newPayment = await Payment.create({
                  // UserID: req.body.UserID,
                  // ChatID: req.body.ChatID,
                  // Email: req.body.Email,
                  Amount: req.body.Amount,
                  Last_four_digit_of_account: req.body.Last_four_digit_of_account,
                  Payment_Pic: req.file.path, 
                  Payment_Method: req.body.Payment_Method,
                  Date: req.body.Date,
                  Time: req.body.Time,
                  
              });
          
              console.log("Payment record created successfully!");
              res.send({ message: "Payment record created successfully!", payment: newPayment });
          } catch (error) {
              console.error("Failed to create payment record: ", error);
              res.status(500).send(error.message);
          }
        });
    } catch (error) {
        console.error("Failed to process payment data: ", error);
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
    get_videoPost_for_update,
    allusers,
    see_other_user_profile,
    logout,
    add_chats,
    check_chat_exist_or_not,
    allSocialMediaPosts,
    chatgpt,



    get_email_of_user_for_report,
    saveTheReportDataInModel,
    fetchAllNotifications,
    check_new_notification_or_not,
    Payment_from_user
};