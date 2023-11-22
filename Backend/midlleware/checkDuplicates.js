const user = require("../models/user.model");  

const checkDuplicate = (req, res, next) => {
    user.findOne({
      where: {
          Name: req.body.name
      }
    }).then(rs => {
      if (rs) {
        res.status(400).send({message: "User already exist"});
        return;
      }
      user.findOne({
        where: {
          Email: req.body.email
        }
      }).then(rs => {
        if (rs) {
          res.status(400).send({message: "User already exist"});
          return;
        }

        next();
      });
    });
  };


  module.exports = checkDuplicate