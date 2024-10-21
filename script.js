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


let computerChoice = getComputerChoice();
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3-1 + 1) + 1);
    if (choice === 1) {
        console.log("ROCK");
        return "ROCK";
    } else if (choice === 2) {
        console.log("PAPER");
        return "PAPER";
    } else if (choice === 3) {
        console.log("SCISSORS");
        return "SCISSORS";
    } else
    console.log("ERROR");
    return "ERROR";
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors")


function rockBtn() {
    if (computerChoice === "ROCK") {
        console.log("A TIE! TRY AGAIN!");
       } else if (computerChoice === "PAPER") {
        console.log("YOU LOST! TRY AGAIN!"); 
       } else if (computerChoice === "SCISSORS") {
        console.log("YOU WON! KEEP IT UP!");
       } else
       console.log("AN ERROR HAS OCCURED");
}

rockButton.addEventListener("click", rockBtn);

function paperBtn() {
    if (computerChoice === "PAPER") {
        console.log("A TIE! TRY AGAIN!");
       } else if (computerChoice === "SCISSORS") {
        console.log("YOU LOST! TRY AGAIN!"); 
       } else if (computerChoice === "ROCK") {
        console.log("YOU WON! KEEP IT UP!");
       } else
       console.log("ERROR");
}

paperButton.addEventListener("click", paperBtn);

function scissorsBtn() {
    if (computerChoice === "SCISSORS") {
        console.log("A TIE! TRY AGAIN!");
       } else if (computerChoice === "ROCK") {
        console.log("YOU LOST! TRY AGAIN!"); 
       } else if (computerChoice === "PAPER") {
        console.log("YOU WON! KEEP IT UP!");
       } else
       console.log("ERROR");
}

// scissorsButton.addEventListener("click", scissorsBtn);

// function getHumanChoice() {
//     if (rockButton.click = true){
//         console.log("ROCK");
//     };
// };



// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {

// }