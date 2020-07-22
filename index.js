import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


const wCFinal = fifaData.filter(item =>  item.Year === 2014 && item.Stage === "Final")
console.log(wCFinal[0]["Home Team Name"]);
console.log(wCFinal[0]["Away Team Name"]);
console.log(wCFinal[0]["Home Team Goals"]);
console.log(wCFinal[0]["Away Team Goals"]);
console.log(wCFinal[0]["Win conditions"]);   




/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {          //Set parameter to data to accept the "fifaData parameter"
    return data.filter((item) => {      //Filtered through every "item" of "fifaData" array  
        return item.Stage === "Final";  // returned every "fifaData" array whose stage was set to "Final"
    })
};
 console.log(getFinals(fifaData));    // Invoked the function & displayed every array with ^ conditions 

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(finalsCallback) {        //Set parameter to "finalsCallback" for higher order function 
    const years = finalsCallback.map((item) => {  //Mapped through the "fifaData" array of "Final"
        return item.Year;                //returned only the year of every "Final" in the "fifaData" array
    })
    return years;                        //returned the variable years
};
console.log(getYears(getFinals(fifaData)));  //invoked "getYears"-> "getFinals"->"fifaData" to return the years the finals took place 

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsCallback) {       
    return finalsCallback.map((item) => {   //mapped through the finalists in "fifaData" 
        const teams = {};                       //created an empty object named "teams" to place the teams in 
        teams.homeTeam = {                          //nested a object called "homeTeam" in "teams" 
            "teamCountry": item["Home Team Name"],      //created "teamCountry" key to hold the data of the "Home Team Name" 's 
            "score": item["Home Team Goals"]           //created "score" key to hold the data of the amount of "Home Team Goals" 's 
        }
        teams.awayTeam = {                                  //nested a object called "homeTeam" in "teams" 
            "teamCountry": item["Away Team Name"],              //created "teamCountry" key to hold the data of the "Home Team Name" 's 
            "score": item["Away Team Goals"]           //created "score" key to hold the data of the amount of "Home Team Goals"'s        
        }
        if(teams.homeTeam.score > teams.awayTeam.score){   //conditional statement to check if "hometeam" score is more than the "awayteam" 
            return teams.homeTeam.teamCountry                       //returned the "hometeam" that won "teamCountry"
        }
        else return(teams.awayTeam.teamCountry);     //else return the "awayTeam" that won through "teamCountry"
    })
};
console.log(getWinners(getFinals(fifaData)));     //invoked "getWinners"->"getFinals"->"getFifaData" to return winners of the finals

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winnerCallback, yearsCallback) {  //(WinCB) to invoke "getWinners" func. & (YearsCB) to invoke "getYears" func. 
    return winnerCallback.map((item, index) => {              // Mapping "getWinners" items and index for function use         
        return `In ${yearsCallback[index]}, ${item} won the world cup!` //Used "getYears" to get back an 
    })
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));
// invoked "getWinnersByYear" -> getWinners -> getFinals -> fifaData ) to return the winners of the finals
// invoked "getWinnersByYear" -> getYears -> getFinals -> fifaData ) to return the years the playing won 

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const reducer = (total, item) => {    
        return total + item["Away Team Goals"] + item["Home Team Goals"];
    }
    const totalGoals = data.reduce(reducer, 0);
    return (totalGoals / data.length);
};

console.log(`Average goals for home and away per match: ${getAverageGoals(fifaData)}`);

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
