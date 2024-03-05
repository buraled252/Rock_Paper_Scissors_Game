let theChoices = ["rock","paper","scissors"] //Possible choices of the game defined in an array (3 choice)
let gameResults = {wins: 0, losses: 0, ties: 0};
let player = { choice: null}; //Player Object  Resets the choice of player to zero
let playerChoice_el = document.getElementById("player-choice") // graps player-choice id element of HTML
let computerChoice_el = document.getElementById("computer-choice")//graps computer-choice id element of HTML
let gameStats = document.getElementById("game-stats")

function playRock(){
    player.choice = "rock"; //selects player choice to rock
    playGame();
}
function playPaper(){
    player.choice = "paper";
    playGame();
}
function playScissors(){
    player.choice = "scissors";
    playGame();
}
function playGame(){
    let isAlive = true;
    if (isAlive) {
    let computerChoice = getComputerChoice();
    computerChoice_el.textContent = "Computer's Choice: " + computerChoice;
    playerChoice_el.textContent = "Player's Choice: " + player.choice;
    compareChoices(player.choice, computerChoice);
    }
}
//Helper Function
function getComputerChoice(){
   return theChoices [Math.floor(Math.random() * theChoices.length)]
}
function compareChoices(playerChoice, computerChoice){
    if (playerChoice === computerChoice) {
        gameResults.ties++;
        displayMessage("It's a tie!")
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") || ( playerChoice === "paper" && computerChoice === "rock") || (playerChoice ==="Scissors" && computerChoice === "paper")) {
        gameResults.wins++;
        displayMessage("You Win! " + playerChoice + " beats " + computerChoice + ".")
    } else {
        gameResults.losses++;
        displayMessage(
          "You lose! " + computerChoice + " beats " + playerChoice + "."
        );
      }
      updateGameResults();
    } 


function displayMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function updateGameResults() {
    gameStats.innerText = "Wins: " + gameResults.wins + " | Losses: " + gameResults.losses + " | Ties: " + gameResults.ties;
 
}
function resetGame(){

}