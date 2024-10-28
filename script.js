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
  const choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  switch (choice) {
    case 1:
      result = "ROCK";
      break;

    case 2:
      result = "PAPER";
      break;

    case 3:
      result = "SCISSORS";
      break;

    default:
      result = "ERROR";
      console.error("AN ERROR HAS OCCURED");
      break;
  }
  //   console.log(result);
  return result;
}

function handleUserInput(compChoice, userChoice) {
  let result;
  if (compChoice === userChoice) {
    result = "A TIE! TRY AGAIN!";
  } else {
    switch (compChoice) {
      case "ROCK":
        if (userChoice == "PAPER") {
          result = "YOU WON! KEEP IT UP!";
        } else {
          result = "YOU LOST! TRY AGAIN!";
        }
        break;

      case "PAPER":
        if (userChoice == "SCISSORS") {
          result = "YOU WON! KEEP IT UP!";
        } else {
          result = "YOU LOST! TRY AGAIN!";
        }
        break;

      case "SCISSORS":
        if (userChoice == "ROCK") {
          result = "YOU WON! KEEP IT UP!";
        } else {
          result = "YOU LOST! TRY AGAIN!";
        }
        break;

      default:
        break;
    }
  }

  handleScoreCalculation(result);
  computerChoice = getComputerChoice();
}

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () =>
  handleUserInput(computerChoice, "ROCK")
);
paperButton.addEventListener("click", () =>
  handleUserInput(computerChoice, "PAPER")
);
scissorsButton.addEventListener("click", () =>
  handleUserInput(computerChoice, "SCISSORS")
);

let roundNumber = 1;

function handleScoreCalculation(matchResult) {
  const computerScoreHTML = document.querySelector("#computerScore");
  const userScoreHTML = document.querySelector("#userScore");

  let computerScore = Number.parseInt(computerScoreHTML.innerHTML);
  let userScore = Number.parseInt(userScoreHTML.innerHTML);

  switch (matchResult) {
    case "YOU LOST! TRY AGAIN!":
      computerScore++;
      break;
    case "A TIE! TRY AGAIN!":
      break;

    case "YOU WON! KEEP IT UP!":
      userScore++;
      break;

    default:
      break;
  }

  computerScoreHTML.innerHTML = computerScore;
  userScoreHTML.innerHTML = userScore;

  const log = document.querySelector("#log");
  log.innerHTML += `Round ${roundNumber}: ${matchResult}<br>`;

  if (roundNumber == 5) {
    const rockButton = document.querySelector("#rock");
    let rockButtonClone = rockButton.cloneNode(true);
    rockButton.parentNode.replaceChild(rockButtonClone, rockButton);

    const paperButton = document.querySelector("#paper");
    let paperButtonClone = paperButton.cloneNode(true);
    paperButton.parentNode.replaceChild(paperButtonClone, paperButton);

    const scissorsButton = document.querySelector("#scissors");
    let scissorsButtonClone = paperButton.cloneNode(true);
    scissorsButton.parentNode.replaceChild(scissorsButtonClone, scissorsButton);
  } else {
    roundNumber++;
  }
}
