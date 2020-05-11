const express = require("express");
const router = express.Router();
const communitiesModel = require("../communities/communities-model.js");
const Users = require("../users/users-model.js");
const childs = require("./childrens-model.js");

router.get("/:userid/:communityid", checkIfAdmin, (req, res) => {
  childs
    .childsOfcomunity(req.params.communityid)
    .then(allchilds => res.status(200).json(allchilds))
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

function checkIfAdmin(req, res, next) {
  const id = Number(req.params.communityid);
  Users.findUserByid(req.params.userid)
    .then(user => {
      if (user.isAdmin == 0) {
        communitiesModel
          .getCommunity(user.country_id, id)
          .then(comunity => {
            if (comunity) {
              childs
                .childsOfcomunity(id)
                .then(allChilds => {
                  console.log(allChilds); res.status(200).json(allChilds)
                })
                .catch(error => {
                  console.log(error)
                  res.status(500).json({ message: "error getting data" })
                }
                );
            } else {
              res.status(401).json("Don't Have access");
            }
          })
          .catch(error =>
            res.status(500).json({ message: "error getting data" })
          );
      } else next();
    })
    .catch(error => res.status(500).json({ message: "error getting data1" }));
}

// ADDING CHILD
router.post("/:comid", (req, res) => {
  console.log(req.body)
  childs
    .addingChild(req.body, req.params.comid)
    .then(allchilds => { console.log(allchilds); res.status(200).json(allchilds) })
    .catch(error => { console.log(error); res.status(500).json({ message: "error getting data" }) });
});





// CHILD BY ID
router.get("/:userid/:communityid/:childid", checkIfAdminForChild, (req, res) => {
  console.log(req.params)
  childs
    .childById(req.params.childid)
    .then(allchilds => { console.log(allchilds); res.status(200).json(allchilds) })
    .catch(error => { console.log(error); res.status(500).json({ message: "error getting data" }) });
});

function checkIfAdminForChild(req, res, next) {
  const id = Number(req.params.childid);
  const comId = Number(req.params.communityid)
  Users.findUserByid(req.params.userid)
    .then(user => {
      if (user.isAdmin == 0) {
        communitiesModel
          .getCommunity(user.country_id, comId)
          .then(comunity => {
            if (comunity) {
              childs
                .childById(id)
                .then(allChilds => {
                  console.log(allChilds); res.status(200).json(allChilds)
                })
                .catch(error => {
                  console.log(error)
                  res.status(500).json({ message: "error getting data" })
                }
                );
            } else {
              res.status(401).json("Don't Have access");
            }
          })
          .catch(error =>
            res.status(500).json({ message: "error getting data" })
          );
      } else next();
    })
    .catch(error => res.status(500).json({ message: "error getting data1" }));
}

module.exports = router;
