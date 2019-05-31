const express = require("express");
const Weather = require("../../models/weather");

const router = express.Router();

router.get("/:city", function(req, res) {
  var city = req.params.city;

  Weather.retrieveByCity(city, function(err, weather) {
    if (err) {
      return res.json(err);
    } else {
      res.json(weather);
    }
  });
});

module.exports = router;
