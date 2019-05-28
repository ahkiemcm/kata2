const express = require("express");
const Cities = require("../../models/cities");

const router = express.Router();

router.get("/", function(req, res) {
  Cities.retrieveAll(function(err, cities) {
    if (err) {
      return res.json(err);
    } else {
      res.json(cities);
    }
  });
});

router.post("/", function(req, res) {
  var city = req.body.city;

  Cities.insert(city, function(err, res) {
    if (err) {
      return res.json(err);
    } else {
      res.json(res);
    }
  });
});

module.exports = router;
