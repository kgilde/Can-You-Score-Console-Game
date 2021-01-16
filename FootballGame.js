//define some variables
let totalyards = 0; // total yards adding up
let passes = [25, 5, 0, 3, 0, 11, 50, 0, 13, 7, 0, 60, 15, 5, 10, 15, 0, 5, 10, 20] //array yards for passes
let runs = [2, 0, 4, 30, 10, 5, 8, 4, 8, 0, 10, 45, 0, 0, 3, 4, 5, 0, 0, 5] //array yards for runs
let gainedrunzero = 0; //if a pass play is called
let gainedpasszero = 0; // if a run play is called
let currentyards = 0; //starting point for yards
let down = 1 //starting point for down
//random team selection
let teams = ["chiefs", "raiders", "chargers", "dolphins", "colts", "giants", "jets", "cowboys", "bengals", "browns", "vikings", "49ers", "packers"] //teams array
let teampick = function () {
  return (teams[Math.floor(Math.random() * teams.length)]);
}
//start with allowing player to pick a team.

let teamname = prompt("Please enter your team name");
alert(`Welcome to the game ${teamname}, You're playing the ` + teampick());

//main function for the game

while (totalyards < 100 && down < 5) {
  let playcall = prompt("Would you like to run or pass?");
  if (playcall === "run") {
    run();
  } else if (playcall === "pass") {
    pass();
  } else {
    alert("Please enter pass or run!")
  }
  console.log(totalyards);
  playcall;
}
playresult();
//pass function random #
function randompasses() {
  return (passes[Math.floor(Math.random() * passes.length)]);
}
//run function random #
function randomruns() {
  return (runs[Math.floor(Math.random() * runs.length)]);
}
//functions for the game
//pass function
function pass() {
  let gainedpass = randompasses();
  totalyards += gainedpass;
  currentyards += gainedpass;
  alert("You gained " + gainedpass + " yards, and you have " + yardstofirst() + " left until a first down.");
  incrementdown();
}
//run function
function run() {
  let gainedrun = randomruns(); // yards gained from play
  totalyards += gainedrun; //running total
  currentyards += gainedrun;
  alert("You gained " + gainedrun + " yards, and you have " + yardstofirst() + " left until a first down.");
  incrementdown();
}
//result of play function
function playresult() {
  if (down === 5) {
    alert("You didn't get a first down, game over!");
  } else {
    alert("You got a TD!");
  }
}

//first down function
function incrementdown() {
  if (currentyards >= 10) {
    down = 1;
    currentyards = 0;
    alert("You got a first down!");
  } else {
    down++;
    alert("It's now down # " + down);
  }
}
//function for firstdown yards left
function yardstofirst() {
  if (currentyards < 10) {
    return (10 - currentyards);
  } else {
    return (0);
  }
}