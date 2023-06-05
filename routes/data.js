var express = require("express");
var router = express.Router();
var database = require("../database");

router.get("/", function (request, response, next) {
  const query = 'SHOW FULL TABLES WHERE Table_type = "VIEW"';
  database.query(query, (err, results) => {
    if (err) throw err;
    const viewNames = results.map((row) => row[Object.keys(row)[0]]);
    response.render("data", { title: "Visualization Mapping", viewNames });
  });
});

router.post("/action", function (request, response, next) {
  var action = request.body.action;

  if (action == "fetch") {
    var query = "SELECT * FROM visualization_mapping";
    database.query(query, function (error, data) {
      response.json({
        data: data,
      });
    });
  }

  if (action == "Add") {
    var visualizationId = request.body.visualizationId;
    var columns = request.body.columns;
    var sequenceNumber = request.body.sequenceNumber;
    var isActive = request.body.isActive;

    var query = `
		INSERT INTO visualization_mapping 
		(visualizationId, columns, sequenceNumber, isActive) 
		VALUES ("${visualizationId}", "${columns}", "${sequenceNumber}", "${isActive}")
		`;

    database.query(query, function (error, data) {
      response.json({
        message: "Data Added",
      });
    });
  }

  if (action == "fetch_single") {
    var id = request.body.id;

    var query = `SELECT * FROM visualization_mapping WHERE id = "${id}"`;

    database.query(query, function (error, data) {
      response.json(data[0]);
    });
  }

  if (action == "Edit") {
    var id = request.body.id;
    var visualizationId = request.body.visualizationId;
    var columns = request.body.columns;
    var sequenceNumber = request.body.sequenceNumber;
    var isActive = request.body.isActive;

    var query = `
		UPDATE visualization_mapping 
		SET visualizationId = "${visualizationId}", 
		columns = "${columns}", 
		sequenceNumber = "${sequenceNumber}", 
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

    var query = `DELETE FROM visualization_mapping WHERE id = "${id}"`;

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
//     var query = "SELECT * FROM visualization_mapping";
//     database.query(query, function (error, data) {
//       response.json({
//         data: data,
//       });
//     });
//   }

//   if (action == "Add") {
//     var visualizationId = request.body.visualizationId;
//     var columns = request.body.columns;
//     var sequenceNumber = request.body.sequenceNumber;
//     var isActive = request.body.isActive;

//     var query = `
// 		INSERT INTO visualization_mapping
// 		(visualizationId, columns, sequenceNumber, isActive)
// 		VALUES ("${visualizationId}", "${columns}", "${sequenceNumber}", "${isActive}")
// 		`;

//     database.query(query, function (error, data) {
//       response.json({
//         message: "Data Added",
//       });
//     });
//   }

//   if (action == "fetch_single") {
//     var id = request.body.id;

//     var query = `SELECT * FROM visualization_mapping WHERE id = "${id}"`;

//     database.query(query, function (error, data) {
//       response.json(data[0]);
//     });
//   }

//   if (action == "Edit") {
//     var id = request.body.id;
//     var visualizationId = request.body.visualizationId;
//     var columns = request.body.columns;
//     var sequenceNumber = request.body.sequenceNumber;
//     var isActive = request.body.isActive;

//     var query = `
// 		UPDATE visualization_mapping
// 		SET visualizationId = "${visualizationId}",
// 		columns = "${columns}",
// 		sequenceNumber = "${sequenceNumber}",
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

//     var query = `DELETE FROM visualization_mapping WHERE id = "${id}"`;

//     database.query(query, function (error, data) {
//       response.json({
//         message: "Data Deleted",
//       });
//     });
//   }
// });

// module.exports = router;
