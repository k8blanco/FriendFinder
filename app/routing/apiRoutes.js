//Load Survey Data Arrays
var friends = require("../data/friends");

//Routing
module.exports = function (app) {

    //API GET Requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    //API POST Requests
    app.post("/api/friends", function (req, res) {

        //capture user input object
        var newFriend = req.body;
        var compatScores = newFriend.scores;

        //set variables with initial values
        var nameMatch = "";
        var photoMatch = "";
        var difference = 100;

        for (var i = 0; i < friends.length; i++) {

            //compute differences for each question
            let diff = 0;

            for (var j = 0; j < compatScores.length; j++) {
                diff += Math.abs(friends[i].scores[j] - compatScores[j]);
            }

            //Friend match with lowest difference
            if (diff < difference) {
                console.log("Closest match found!");
                console.log("Friend Name: " + friends[i].name);
                console.log("Friend image: " + friends[i].photo);

                difference = diff;
                nameMatch = friends[i].name;
                photoMatch = friends[i].photo;

                console.log("------" + photoMatch);

            }
        };

        //Add new user
        friends.push(newFriend);


        //send response
        res.json({
            status: 'OK',
            nameMatch: nameMatch,
            photoMatch: photoMatch
        });


    });
};