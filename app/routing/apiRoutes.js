//Load Survey Data Arrays

var surveyData = require("../data/friends");

//Routing

module.exports = function(app) {
    //API GET Requests
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    //API POST Requests
    app.post("/api/friends", function(req, res) {
        //think about putting in an IF statement here...if survey is complete/all filled out?
        surveyData.push(req.body);
        res.json(true);
    });
}