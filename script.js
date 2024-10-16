// upon start
// randomly decide between the 3 values of "rock", "paper", or "scissors"
// when user INPUTS (clicks a button)
//      display chosen input
//      display program's chosen value
//      check input to chosen value
// IF input beats value chosen by program
//      display "YOU WON" message
//      add point to user's score
//      continue to next round
// IF chosen value beats user input
//      display "YOU LOST" message
//      add point to program's score
//      continue to next round
// IF input and chosen value are equal
//      display "DRAW" message
//      no points are rewarded
//      does not continue to next round

// in CASE that 5 rounds have been completed
// IF user has most points
//      display "CONGRATULATIONS, YOU WIN!" message
//      display "PLAY AGAIN?" button
// IF program has most points
//      display "TRY AGAIN LOSER!" message
//      display "TRY AGAIN" button

// in CASE that "PLAY AGAIN"/"TRY AGAIN" button is pressed
//      reset all values to start


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "ROCK";
    } else if (choice === 1) {
        return "PAPER";
    } else if (choice === 2) {
        return "SCISSORS";
    }
}

console.log(getComputerChoice());

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors")


rockButton.addEventListener("click", function() {
    // return "ROCK";
    // console.log("ROCK");
   if (getComputerChoice() === "ROCK") {
    return "TIED";
   } else if (getComputerChoice() === "PAPER") {
    return "LOSE"; 
   } else if (getComputerChoice() === "SCISSORS") {
    return "WIN";
   }
});

paperButton.addEventListener("click", function() {
    if (getComputerChoice() === "PAPER") {
        return "TIED";
       } else if (getComputerChoice() === "SCISSORS") {
        return "LOSE"; 
       } else if (getComputerChoice() === "ROCK") {
        return "WIN";
       }
});

scissorsButton.addEventListener("click", function() {
    if (getComputerChoice() === "SCISSORS") {
        return "TIED";
       } else if (getComputerChoice() === "ROCK") {
        return "LOSE"; 
       } else if (getComputerChoice() === "PAPER") {
        return "WIN";
       }
});

// function getHumanChoice() {
//     if (rockButton.click = true){
//         console.log("ROCK");
//     };
// };



// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {

// }