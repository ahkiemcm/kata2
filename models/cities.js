const db = require("../connection/database");

class Cities {
  static retrieveAll(callback) {
    db.query("SELECT city_name FROM cities", function(err, res) {
      if (err.error) {
        return callback(err);
      } else {
        callback(res);
      }
    });
  }

  static insert(city, callback) {
    db.query("INSERT INTO cities (city_name) VALUES($1)", [city], function(
      err,
      res
    ) {
      if (err.error) {
        return callback(err);
      } else {
        callback(res);
      }
    });
  }
}

module.exports = Cities;
