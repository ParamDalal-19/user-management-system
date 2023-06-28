var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/", function (request, response, next){
  response.render("data", { title: "User Management System" });
});

router.post("/action", function (request, response, next) {
  var action = request.body.action;

  if (action == "fetch") {
    var query = "SELECT * FROM user_management";
    database.query(query, function (error, data) {
      response.json({
        data: data,
      });
    });
  }

  if (action == "Add") {
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var email = request.body.email;
    var isActive = request.body.isActive;

    var query = `
		INSERT INTO user_management 
		(firstName, lastName, email, isActive) 
		VALUES ("${firstName}", "${lastName}", "${email}", "${isActive}")
		`;

    database.query(query, function (error, data) {
      response.json({
        message: "Data Added",
      });
    });
  }

  if (action == "fetch_single") {
    var id = request.body.id;

    var query = `SELECT * FROM user_management WHERE id = "${id}"`;

    database.query(query, function (error, data) {
      response.json(data[0]);
    });
  }

  if (action == "Edit") {
    var id = request.body.id;
    var firstName = request.body.firstName;
    var lastName = request.body.lastName;
    var email = request.body.email;
    var isActive = request.body.isActive;

    var query = `
		UPDATE user_management 
		SET firstName = "${firstName}", 
		lastName = "${lastName}", 
		email = "${email}", 
		isActive = "${isActive}" 
		WHERE id = "${id}"
		`;

    database.query(query, function (error, data) {
      response.json({
        message: "Data Edited",
      });
    });
  }

  if (action == "delete") {
    var id = request.body.id;

    var query = `DELETE FROM user_management WHERE id = "${id}"`;

    database.query(query, function (error, data) {
      response.json({
        message: "Data Deleted",
      });
    });
  }
});

module.exports = router;

// var express = require("express");
// var router = express.Router();
// var database = require("../database");

// router.get("/", function (request, response, next) {
//   // const query = 'SHOW FULL TABLES WHERE Table_type = "VIEW"';
//   // database.query(query, (err, results) => {
//   //   if (err) throw err;
//   //   const viewNames = results.map((row) => row[Object.keys(row)[0]]);
//   //   res.render("config", { viewNames });
//   // });
//   response.render("data", { title: "Visualization Mapping" });
// });

// router.post("/action", function (request, response, next) {
//   var action = request.body.action;

//   if (action == "fetch") {
//     var query = "SELECT * FROM user_management";
//     database.query(query, function (error, data) {
//       response.json({
//         data: data,
//       });
//     });
//   }

//   if (action == "Add") {
//     var firstName = request.body.firstName;
//     var lastName = request.body.lastName;
//     var email = request.body.email;
//     var isActive = request.body.isActive;

//     var query = `
// 		INSERT INTO user_management
// 		(firstName, lastName, email, isActive)
// 		VALUES ("${firstName}", "${lastName}", "${email}", "${isActive}")
// 		`;

//     database.query(query, function (error, data) {
//       response.json({
//         message: "Data Added",
//       });
//     });
//   }

//   if (action == "fetch_single") {
//     var id = request.body.id;

//     var query = `SELECT * FROM user_management WHERE id = "${id}"`;

//     database.query(query, function (error, data) {
//       response.json(data[0]);
//     });
//   }

//   if (action == "Edit") {
//     var id = request.body.id;
//     var firstName = request.body.firstName;
//     var lastName = request.body.lastName;
//     var email = request.body.email;
//     var isActive = request.body.isActive;

//     var query = `
// 		UPDATE user_management
// 		SET firstName = "${firstName}",
// 		lastName = "${lastName}",
// 		email = "${email}",
// 		isActive = "${isActive}"
// 		WHERE id = "${id}"
// 		`;

//     database.query(query, function (error, data) {
//       response.json({
//         message: "Data Edited",
//       });
//     });
//   }

//   if (action == "delete") {
//     var id = request.body.id;

//     var query = `DELETE FROM user_management WHERE id = "${id}"`;

//     database.query(query, function (error, data) {
//       response.json({
//         message: "Data Deleted",
//       });
//     });
//   }
// });

// module.exports = router;
