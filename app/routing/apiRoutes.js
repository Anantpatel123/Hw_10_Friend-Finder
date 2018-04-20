var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });      
      
    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        // friends.push(newUser);
        
        console.log(newUser);

        var lowestScore = 10000;
        var bestMatch;

        for (var i = 0; i < friends.length; i++) {// to check friends length.
               
            var currentFriend = friends[i];
            var currentScore = 0;

            for (var s = 0; s < newUser.scores.length; s++) {//to check user input length.
                    
                //Compare the new users score to the current users score
                var ans = Math.abs((currentFriend.scores[s] - newUser.scores[s]));

                currentScore += ans;
            }

            //Compare the current score to the lowest score
            if(currentScore < lowestScore){
                lowestScore = currentScore;
                bestMatch = currentFriend;
            }            
        }
        console.log ("Lowest Score: ", lowestScore);//this to match with friends.
        console.log ("Best match name: ", bestMatch.name);
        console.log ("Best match photo Link: ", bestMatch.photo);
        
        // var matchname = bestMatch.name;
        // var matchpic = bestMatch.photo;

        friends.push(newUser);
        res.json(bestMatch);
             
    });
    

}