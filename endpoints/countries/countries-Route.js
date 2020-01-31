const express = require("express");
const router = express.Router();
const countries = require("./countries-model.js");

// Get All Countries
router.get("/:userid", countries.isAdmin, (req, res) => {
  countries
    .getCountries()
    .then(countries => res.status(200).json(countries))
    .catch(error => res.status(500).json({ message: "error getting data" }));
});

module.exports = router;
