

var tableData = require("../data/friends");

module.exports = function (app) {

  app.get("/data/friends", function (req, res) {
    res.json(tableData);
  });

  app.post("/data/friends", function (req, res) {
    var match = 0;
    var difference = 0;
    console.log(parseInt(Math.abs(parseInt(tableData[1].scores[0]) - parseInt(req.body.scores[0]))));


    for (var i = 0; i < tableData.length; i++) {
      var q0 = Math.abs(parseInt(tableData[i].scores[0]) - parseInt(req.body.scores[0]));
      var q1 = Math.abs(parseInt(tableData[i].scores[1]) - parseInt(req.body.scores[1]));
      var q2 = Math.abs(parseInt(tableData[i].scores[2]) - parseInt(req.body.scores[2]));
      var q3 = Math.abs(parseInt(tableData[i].scores[3]) - parseInt(req.body.scores[3]));
      var q4 = Math.abs(parseInt(tableData[i].scores[4]) - parseInt(req.body.scores[4]));
      var q5 = Math.abs(parseInt(tableData[i].scores[5]) - parseInt(req.body.scores[5]));
      var q6 = Math.abs(parseInt(tableData[i].scores[6]) - parseInt(req.body.scores[6]));
      var q7 = Math.abs(parseInt(tableData[i].scores[7]) - parseInt(req.body.scores[7]));
      var q8 = Math.abs(parseInt(tableData[i].scores[8]) - parseInt(req.body.scores[8]));
      var q9 = Math.abs(parseInt(tableData[i].scores[9]) - parseInt(req.body.scores[9]));
      console.log(q2);
      var totalq = q0 + q1 + q2 + q3 + q4 + q5 + q6 + q7 + q8 + q9;
      if (i == 0) {
        match = 0;
        difference = totalq;
      } else if (totalq < difference) {
        match = i;
        difference = totalq;
      }
    }

    var test = {
      name: tableData[match].name,
      photo: tableData[match].photo
    };
    tableData.push(req.body);

    console.log(test);
    res.json(test);

  });

  app.post("/data/friends", function () {
    tableData = [];

    console.log(tableData);
  });
};
