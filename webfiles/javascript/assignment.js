// Define a variable 

let myLuckyNumber = 7;
console.log(myLuckyNumber);
let octopusLimbs = 8;
console.log(octopusLimbs);

// Using constants

const boilingPointC = 100;
console.log(boilingPointC);
const boilingPointF = 212;
console.log(boilingPointF);

// Using let and const

let bestColor = 'blue';
console.log(bestColor);
 let quote =  '"The best thing about a boolean is even if you are wrong, you are only off by a bit."';
    console.log(quote);

// using methods

let myName = ' FORTUNE ';
console.log(myName.toLowerCase());
console.log(myName.trim());

// using slice and replace

let word = "skateboard";
let newWord = word.slice(5, 10);
console.log(newWord);
console.log(newWord.replace('o', 'e'));

// Game 

let die1 = Math.floor(Math.random() * 6) + 1;
let die2 = Math.floor(Math.random() * 6) + 1;
let total = die1 + die2;
let roll = `You rolled a "${die1}" and a "${die2}". They a sum to "${total}"`;
console.log(roll);

// Conditional Statements

function phrases(color){
    if (color === 'stop'){  
        return 'Red';
    } else if (color === 'slow'){
        return 'yellow';
    }else if (color === 'go'){
        return 'green';
    } 
    else {
        return 'purple';
    }
}
console.log(phrases('slow'));

// using arrays 

lottoNumber = [1,2,3,4,5,6];
console.log(lottoNumber);

let leaderboard = [ 'kristen', 'eric', 'NAanata', 'Lua', 'Erckson', 'doe'];
leaderboard[3] = 'Luna';
console.log(leaderboard);
let newLeaderboard = leaderboard.pop();
console.log(newLeaderboard);
console.log(leaderboard);
let newLeaderboard2 = leaderboard.shift();
console.log(newLeaderboard2);
console.log(leaderboard);
let newLeaderboard3 = leaderboard.pop(-1);
console.log(newLeaderboard3);
console.log(leaderboard);
let newLeaderboard4 = leaderboard.push('fortune');
console.log(newLeaderboard4);
console.log(leaderboard);
let newLeaderboard5 = leaderboard.unshift('fortune');
console.log(leaderboard);

// nested aray 

let airplaneSeats = [
    [ 'John'], ['Sarah'], [''], ['fortune']
];
console.log(airplaneSeats);
let passenger = airplaneSeats[2][0] = 'Erckson';
console.log(passenger);
console.log(airplaneSeats);

// Object literals



