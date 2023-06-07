function getComputerChoice(){ // Random Computer Choice
  let choice = Math.floor(Math.random()*3 + 1);

  if (choice == 1){
    return "ROCK";
  }
  else if (choice ==2){
    return "PAPER";
  }
  else {
    return "SCISSOR";
  }
}

function displayComputerChoice(choice){
   computerChoice= document.querySelector("#computerChoice");
  if (choice == "ROCK"){
    computerChoice.src = "images/rock.jpg"
  } 
  else if (choice == "PAPER"){
    computerChoice.src = "images/paper.jpg"
  }
  else{
    computerChoice.src = "images/scissors.jpg"
  }
}

function displayPlayerChoice(choice){
  playerChoice= document.querySelector("#playerChoice");
 if (choice == "ROCK"){
   playerChoice.src = "images/rock.jpg"
 } 
 else if (choice == "PAPER"){
  playerChoice.src = "images/paper.jpg"
 }
 else{
  playerChoice.src = "images/scissors.jpg"
 }
}

function playGame(playerChoice){
  displayPlayerChoice(playerChoice);
  
  var computerChoice = getComputerChoice();
  displayComputerChoice(computerChoice);

  if (playerChoice == computerChoice){
    console.log("Tie.");
    return;
  }
  else{
  switch(playerChoice){
    case "ROCK":
      if(computerChoice == "SCISSORS"){
        console.log("You Win!");
      }
      else if(computerChoice == "PAPER"){
        console.log("You Lose!");
      }
      break;
    case "PAPER":
      if(computerChoice == "SCISSORS"){
        console.log("You Lose.");
      }
      else if(computerChoice == "ROCK"){
        console.log("You Win!");
      }
      break;
    case "SCISSORS":
      if(computerChoice == "ROCK"){
        console.log("You Lose.");
      }
      else if(computerChoice == "PAPER"){
        console.log("You Win!");
      }
      break;
    }
  }


}

// Player Selection Event Listeners
const rockBtn = document.querySelector("#ROCK");
const paperBtn = document.querySelector("#PAPER");
const scissorsBtn = document.querySelector("#SCISSORS");

rockBtn.addEventListener("click", function(){
  playGame("ROCK");
});
paperBtn.addEventListener("click", function(){
  playGame("PAPER");
})
scissorsBtn.addEventListener("click", function(){
  playGame("SCISSORS")
});

// Result Elements
var playerChoice = document.querySelector("#playerChoice");
var computerChoice = document.querySelector("#computerChoice");
var result = document.querySelector("#result");






