
function getComputerChoice(){ // Randomly returns Rock, Paper, or Scissor.
  let choice = Math.floor(Math.random()*3 + 1);

  if (choice == 1){
    return "rock";
  }
  else if (choice ==2){
    return "paper";
  }
  else {
    return "scissor";
  }
}

function getPlayerChoice(){
  let playerChoice = prompt("Please choose rock, paper, or scissor: ");

  playerChoice = playerChoice.toLowerCase(); // case insensitive input

  while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissor" && playerChoice!= null){ //Ensures valid choice
    alert("Invalid Choice!\n");
    playerChoice = prompt("Please choose rock, paper, or scissor: ");
    playerChoice = playerChoice.toLowerCase(); // case insensitive input
  }

  return playerChoice;
}

var score = 0; // Score tally out of 5 games.
var tie = 0; // Tie tally out of 5 games.
var lost = 0;

function game(times){
  for (let i=0; i<= times; i++){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
  
    console.log(computerChoice);
  
    if (playerChoice == 'rock'){
      if (computerChoice == 'scissor') {
        alert("You chose rock. Computer chose scissor. \nYou win! :)");
        score += 1;
      }
      else if (computerChoice == 'paper'){
        alert("You chose rock. Computer chose paper. \nYou lose :( ")
      }
      else {
        alert("You chose rock. Computer chose rock. \n It's a tie. :| ")
        tie += 1;
      }
    }
    else if (playerChoice == 'paper'){
      if (computerChoice == 'scissor') {
        alert("You chose paper. Computer chose scissor. \nYou lose! :(");
      }
      else if (computerChoice == 'paper'){
        alert("You chose paper. Computer chose paper. \n It's a tie :| ")
        tie += 1;
      }
      else {
        alert("You chose paper. Computer chose rock. \n You win!. :) ")
        score += 1;
      }
    }
    else if (playerChoice == 'scissor'){
      if (computerChoice == 'scissor') {
        alert("You chose scissor. Computer chose scissor. \n It's a tie. :|");
        tie += 1;
      }
      else if (computerChoice == 'paper'){
        alert("You chose scissor. Computer chose paper. \nYou win! :) ")
        score += 1;
      }
      else {
        alert("You chose scissor. Computer chose rock. \n You lost :(")
      }
    }
  }

  alert("\nYou have won: " + score +" times.\n Tied: " + tie + " times.\n" + "Lost: " + lost +" times.")
}






