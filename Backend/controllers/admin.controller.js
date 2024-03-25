const User = require("../models/user.model");
const sequelize = require("../config");
const jwtToken = require("jsonwebtoken");
const crypto = require("crypto");
const {
  sendVerificationEmail,
  report_confirm_email,
  email_to_reported_id_user,
  update_of_reported_post
} = require("./nodemailer.emailservice");
const Image_Post = require("../models/imagePost.model");
const Video_Post = require("../models/videoPost.model");
const multer = require("multer");
const errorHandler = require("../utlis/errorhandandler");
const { Op } = require("sequelize");
const Native = require("../models/native.model");
const Reports = require("../models/Reports.model");
const Blogs = require("../models/blogs.model");
const Ads = require("../models/ads.model")

const Chatbox = require("../models/chatbox.model");

const fetch_all_reports = async (req, res) => {
  try {

    const users = await Reports.findAll({
      order: [
        ['createdAt', 'DESC'] // Order by 'createdAt' in descending order
      ]
    });

    res.send(users);
  } catch (error) {
    console.error("Failed to retrieve data: ", error);
    res.status(500).send("Failed to retrieve data");
  }
};

const search_post_by_id = async (req, res) => {
  let postid = req.query.id;
  let posttype = req.query.postType;

  console.log("-----------------", postid, posttype);

  if (posttype == "image") {
    const Imagedata = await Image_Post.findOne({
      where: {
        ImageID: postid,
      },
    });

    if (!Imagedata) {
      return res.status(404).send("Image data not found");
    }

    const postUserID = Imagedata.UserID;

    let emailRecord = await User.findOne({
      where: { UserID: postUserID },
    });

    if (!emailRecord) {
      emailRecord = await Native.findOne({
        where: { UserID: postUserID },
      });
    }

    const responseData = {
      Imagedata,
      email: emailRecord,
    };

    res.send(responseData);
  } else if (posttype == "video") {
    const Imagedata = await Video_Post.findOne({
      where: {
        VideoID: postid,
      },
    });

    if (!Imagedata) {
      return res.status(404).send("Image data not found");
    }

    const postUserID = Imagedata.UserID;

    let emailRecord = await User.findOne({
      where: { UserID: postUserID },
    });

    if (!emailRecord) {
      emailRecord = await Native.findOne({
        where: { UserID: postUserID },
      });
    }

    const responseData = {
      Imagedata,
      email: emailRecord,
    };

    res.send(responseData);
  } else if (posttype == "blog") {
    const Imagedata = await Blogs.findOne({
      where: {
        BlogsID: postid,
      },
    });

    if (!Imagedata) {
      return res.status(404).send("Image data not found");
    }

    const postUserID = Imagedata.UserID;

    let emailRecord = await User.findOne({
      where: { UserID: postUserID },
    });

    if (!emailRecord) {
      emailRecord = await Native.findOne({
        where: { UserID: postUserID },
      });
    }

    const responseData = {
      Imagedata,
      email: emailRecord,
    };

    res.send(responseData);

    console.log("-----------blogdata", responseData)
  } else {
    res.send("no data found");
    console.log("no data found");
  }
};



const Delete_post = async (req, res) => {
  try{
    let postid = req.query.id;
  let posttype = req.query.postype;
  let email = req.query.email;
  let name = req.query.name;
  let date = req.query.date;
  let postcategory = req.query.postcategory
    
   

  console.log("-----------------", postid, posttype);

  if (posttype == "image") {
    await Image_Post.destroy({
      where: {
        ImageID: postid,
      },
    });
    await email_to_reported_id_user(email, name, date, posttype, postcategory);

    res.send("deleted");
  } else if (posttype == "video") {
    await Video_Post.destroy({
      where: {
        VideoID: postid,
      },
    });
    await email_to_reported_id_user(email, name, date, posttype, postcategory);

    res.send("deleted");
  } else if (posttype == "blog") {
     await Blogs.destroy({
      where: {
        BlogsID: postid,
      },
    });
    await email_to_reported_id_user(email, name, date, posttype, postcategory);

    res.send("deleted");

  } else {
    res.send("no data found");
    console.log("no data found");
  }

  }
  catch (error) {
    console.error("Failed to save report data: ", error);
    res.status(500).send({ message: "Failed to save report data" });
  }

}


const update_reporter_query = async (req, res) => {


  const ID = req.body.id;
  const date = req.body.createdAt;
  const post_id = req.body.Reported_Post_ID;
  const posttype = req.body.postType;
  const reporttitle = req.body.Reporttitle;
  const report_reason = req.body.reportjustification;
  const reporter_email = req.body.Reporter_email;
  const query_answer = req.body.queryanswer;

  console.log("--", ID);

  

  try {

    await Reports.update(
      {
        // The fields and values to update
        reportstatus: true,
        queryanswer: query_answer
      },
      {
        where: {
          id: ID
        }
      }
    );

    let nameResult = await User.findOne({
      where: { Email: reporter_email },
      attributes: ['Name']
    });
    
    // Check if a User was found, otherwise try finding in Native
    if (!nameResult) {
      nameResult = await Native.findOne({
        where: { Email: reporter_email },
        attributes: ['Name']
      });
    }
    
    // Extract the Name from dataValues
    const Name = nameResult ? nameResult.dataValues.Name : null;


    await update_of_reported_post(reporter_email,  Name,  posttype, date, reporttitle,  query_answer);
    res.status(201).send({ message: "Report successfully submitted and email sent." });
  } catch (error) {
    console.error("Failed to save report data: ", error);
    res.status(500).send({ message: "Failed to save report data" });
  }
};







const adsGifStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/ads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const adsGifFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(gif|GIF|jpg|JPG|jpeg|JPEG|png|PNG|mp4|MP4|avi|AVI|mov|MOV)$/)) {
    req.fileValidationError = 'Only GIF, JPG, PNG, and video files (MP4, AVI, MOV) are allowed!';
    return cb(new Error('Only GIF, JPG, PNG, and video files (MP4, AVI, MOV) are allowed!'), false);
}
  cb(null, true);
};

const adsGifUpload = multer({ 
  storage: adsGifStorage,
  fileFilter: adsGifFileFilter
});

// const add_ads = async (req, res) => {
//   try {
//     await adsGifUpload.single('AdsGif')(req, res, async (err) => {
//       if (req.fileValidationError) {
//         return res.status(400).send(req.fileValidationError);
//       }
//       if (err) {
//         return res.status(500).send(err.message);
//       }

//       try {
//         const adsRecord = await Ads.create({
//           AdsTitle: req.body.title, 
//           AdsGif: req.file.path,
//           Ad_Duration: req.body.duration
//         });

//         console.log("Uploaded ads GIF:", adsRecord);
//         res.send("Successfully added record for the uploaded ads GIF.");
//       } catch (error) {
//         console.error("Failed to create new ad record: ", error);
//         res.status(500).send(error.message);
//       }
//     });
//   } catch (error) {
//     console.error("Failed to process ads upload: ", error);
//     res.status(500).send(error.message);
//   }
// };


function calculateExpiryDate(duration) {
  const durationMap = {
    '1 Day': { days: 1 },
    '1 week': { days: 7 },
    '15 days': { days: 15 },
    '1 month': { days: 30 },
    '2 months': { days: 60 },
    '5 months': { days: 150 },
    '1 Year': { days: 365 },
    '1 minute': { minutes: 1 },
    '5 minutes': { minutes: 5 }
  };

  const currentDate = new Date();
  
  if (durationMap[duration].hasOwnProperty('days')) {
    currentDate.setDate(currentDate.getDate() + durationMap[duration].days);
  } else if (durationMap[duration].hasOwnProperty('minutes')) {
    currentDate.setMinutes(currentDate.getMinutes() + durationMap[duration].minutes);
  } else {
    throw new Error(`Invalid duration: ${duration}`);
  }

  return currentDate.toISOString();
}



const add_ads = async (req, res) => {
  try {
    await adsGifUpload.single('AdsGif')(req, res, async (err) => {
      if (req.fileValidationError) {
        return res.status(400).send(req.fileValidationError);
      }
      if (err) {
        return res.status(500).send(err.message);
      }
  
      try {
        let expiryDate;
        try {
          expiryDate = calculateExpiryDate(req.body.duration);
        } catch (error) {
          return res.status(400).send({ message: error.message });
        }

        const adsRecord = await Ads.create({
          AdsTitle: req.body.title,
          AdsGif: req.file.path,
          Ad_Duration: req.body.duration,
          StartDate: new Date().toISOString(), 
          ExpiryDate: expiryDate 
        });
  
        console.log("Uploaded ads GIF:", adsRecord);
        res.send("Successfully added record for the uploaded ads GIF.");
      } catch (error) {
        console.error("Failed to create new ad record: ", error);
        res.status(500).send(error.message);
      }
    });
  } catch (error) {
    console.error("Failed to process ads upload: ", error);
    res.status(500).send(error.message);
  }
};






  // cron.schedule('0 * * * *', async () => {
  //   try {
  //     const result = await Ads.destroy({
  //       where: {
  //         ExpiryDate: {
  //           [Op.lt]: new Date() 
  //         }
  //       }
  //     });
  //     if (result > 0) {
  //       console.log(`Expired ads removed: ${result}`);
  //     } else {
  //       console.log('No expired ads to remove at this time.');
  //     }
  //   } catch (error) {
  //     console.error('Error removing expired ads:', error);
  //   }
  // });

  




const display_add = async (req, res) => {
  try {
    // Get the count of all ads
    const count = await Ads.count();

    // Get a random entry only if count is not zero
    if (count > 0) {
      const random = Math.floor(Math.random() * count);
      // Again fetch the document at that index
      const randomAd = await Ads.findOne({ offset: random });

      if (!randomAd) {
        return res.status(404).send('No ads found.');
      }

      // Send the random ad as a response
      res.status(200).json(randomAd);
    } else {
      res.status(404).send('No ads found.');
    }
  } catch (error) {
    console.error("Failed to retrieve random ad: ", error);
    res.status(500).send(error.message);
  }
};


module.exports = {
  fetch_all_reports,
  search_post_by_id,
  Delete_post,
  update_reporter_query ,
  add_ads,
  display_add
};
