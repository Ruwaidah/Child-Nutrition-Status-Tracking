const express = require("express");
const router = express.Router();
const communities = require("./communities-model.js");
const Users = require("../users/users-model.js");

router.get("/:userid/communities/:communityid/childrens", (req, res) => {});

module.exports = router;
