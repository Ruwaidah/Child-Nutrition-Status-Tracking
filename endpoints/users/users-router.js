const express = require("express");
const router = express.Router();
const Users = require("./users-model.js");

// User By Id
router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  Users.findUserByid(id)
    .then(user => {
      res.status(200).json({
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          username: user.username,
          email: user.email,
          isAdmin: user.isAdmin,
          country_id: user.country_id,
          country_name: user.country_name
        }
      });
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});

// All Users
router.get("/", (req, res) => {
  Users.allUsers(id)
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({
        message: "error getting the user"
      });
    });
});
module.exports = router;
