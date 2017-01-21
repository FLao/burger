// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  read: function(callback) {
    orm.selectAll("burgers", function(response) {
      callback(response);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(response) {
      callback(response);
    });
  },
  update: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(response) {
      callback(response);
    });
  }
};

// Export the database functions for the controller (burger_controller.js).
module.exports = burger;
