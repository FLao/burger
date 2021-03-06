var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  burger.read(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    response.render("index", hbsObject);
  });
});

router.post("/", function(request, response) {
  burger.create([
    "burger_name", "devoured"
  ], [
    request.body.burger_name, 0
  ], function() {
    response.redirect("/");
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: request.body.devoured
  }, condition, function() {
    response.redirect("/");
  });
});

// Export routes for server.js to use.
module.exports = router;
