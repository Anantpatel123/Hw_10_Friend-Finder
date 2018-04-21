# Friend Finder - Node and Express Servers

### Overview

    Build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

    * Used Express to handle routing. 
    * Used basic npm packages: express, body-parser, and path.

### Description:

    Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

    To determine the user's most compatible friend used the following as a guide:
        * Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]).
        * compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference. 
            - Example: 
            ◾ User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
            ◾ User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
            ◾ Total Difference: 2 + 1 + 2 = 5

        * use the absolute value of the differences. No negative solutions! App should calculate both 5-3 and 3-5 as 2, and so on.
        * The closest match will be the user with the least amount of difference.
        * Once you've found the current user's most compatible friend, display the result as a modal pop-up.
        * The modal should display both the name and picture of the closest match.


