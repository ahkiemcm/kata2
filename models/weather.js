const request = require("request-promise");
const API_KEY = "3eb8ed0f9fbe717fbead97164b99d0d3";

class Weather {
  static retrieveByCity(city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`,
      json: true
    })
      .then(function(res) {
        callback(res);
      })
      .catch(function(err) {
        console.log(err);
        callback({ error: "Could not reach OpenWeatherApi" });
      });
  }
}

module.exports = Weather;
