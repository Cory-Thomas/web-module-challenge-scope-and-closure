// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * - Counter1 is an example of closure and counter2 is an example of basic scope. However, neither of them have been invoked so in counterMaker the counter function would not be called yet.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * - counter1 uses closure. Because their is a callback function inside of counterMaker that has not yet been invoked.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * - count1 is preferable if you want the count variable data to be stored even when it is inactive. count2 is preferable when you want a piece of returned data to be a little more predictable.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */


function inning(){
  let points = Math.floor( Math.random() * 3 );

  return points;
}

// console.log( inning() );


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore( callback, num ){
  let homeVar = 0;
  let awayVar = 0;

  for(let i = 0; i < num; i++){
    homeVar += callback();
    awayVar += callback();
  }

  return {
    Home: homeVar,
    Away: awayVar,
  }
}

// console.log( finalScore(inning, 9) );


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function getInningScore( inningCB ) {
  return {
    Home: inningCB(),
    Away: inningCB(),
  }
}

// console.log( getInningScore(inning) );


function scoreboard( inningScoreCB, inningCB, numInnings ) {
  let score, homeTotal = 0, awayTotal = 0;

  for(let i = 0; i < numInnings; i++){
    score = inningScoreCB( inningCB );
    let homeScore = score.Home;
    let awayScore = score.Away;

    console.log( `${i + 1} inning: Away Team - ${awayScore} :: Home Team - ${homeScore}` );
    homeTotal += homeScore;
    awayTotal += awayScore;
  }

  console.log(`Final Score: Away Team - ${awayTotal} :: Home Team - ${homeTotal}`);
}

scoreboard( getInningScore, inning, 9);


