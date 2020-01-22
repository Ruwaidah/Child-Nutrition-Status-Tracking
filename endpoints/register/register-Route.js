const express = require("express");
const router = express.Router();
const Adding = require("./register-model.js");
const Users = require("../login/login-model.js");

router.post("/", (req, res) => {
  Users.findUser(req.body.username)
    .then(user => {
      if (!user) {
        Adding.findCountry(req.body.country_id).then(country => {
          if (country) {
            Adding.addUSer(req.body)
              .then(ids => {
                res.status(200).json({
                  message: "register Completed"
                });
              })
              .catch(error =>
                res.status(500).json({
                  message: "error adding new user"
                })
              );
          } else {
            res.status(404).json({
              message: "No Conutry with this id"
            });
          }
        });
      } else {
        res.status(400).json({
          message: "username is not availabe"
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "error adding new user"
      });
    });
});

module.exports = router;
