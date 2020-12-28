let rpsString = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let playerSelection = "";

let showGameLog = document.getElementById("gameLog");

let playerRockBtn = document.getElementById("playerRockBtn");
let playerPaperBtn = document.getElementById("playerPaperBtn");
let playerScissorsBtn = document.getElementById("playerScissorsBtn");

let comRockBtn = document.getElementById("comRockBtn");
let comPaperBtn = document.getElementById("comPaperBtn");
let comScissorsBtn = document.getElementById("comScissorsBtn");


let showPlayerScore = document.getElementById("showPlayerScore");
let showComputerScore = document.getElementById("showComputerScore");
let showDrawCount = document.getElementById("showDrawCount");


let lbl_pWin = document.getElementById("lbl_pWin");
let lbl_pLose = document.getElementById("lbl_pLose");
let lbl_cWin = document.getElementById("lbl_cWin");
let lbl_cLost = document.getElementById("lbl_cLost");

playerRockBtn.addEventListener('click',rockBtnClicked);
playerPaperBtn.addEventListener('click',paperBtnClicked);
playerScissorsBtn.addEventListener('click',scissorsBtnClicked);

  
showPlayerScore.innerHTML =  playerScore;
showComputerScore.innerHTML = computerScore;
showDrawCount.innerHTML = drawCounter;




function rockBtnClicked(){
  playerSelection = "rock";
  play();

  return playerSelection;
}

function paperBtnClicked(){
  playerSelection = "paper";
  play();

  return playerSelection;

}

function scissorsBtnClicked(){
  playerSelection = "scissors";
  play();

  return playerSelection;
}










function play() {
  let computerSelection = computerRandomPlay(); 
  playRound(playerSelection, computerSelection);
  
 
  showPlayerScore.innerHTML = playerScore;
  showComputerScore.innerHTML = computerScore;
  showDrawCount.innerHTML =  drawCounter;
 
   if (playerScore >= 5) 
  {
      
    playerRockBtn.style.display = "none";
    playerPaperBtn.style.display = "none";
    playerScissorsBtn.style.display = "none";
    
    comRockBtn.style.display = "none";
    comPaperBtn.style.display = "none";
    comScissorsBtn.style.display = "none";

    lbl_pWin.textContent = "You Win!";
    lbl_cLost.innerText =  " 01001001 00100000 01101100 \n 01101111 01110011 01110100";
   
    gameLog.innerText = (`${playerSelection} > ${computerSelection}\n\nYou won the game Congratulations!.`);
    removePlayerOptionsText();
 
  }

  else if (computerScore >=5 ) {

    playerRockBtn.style.display = "none";
    playerPaperBtn.style.display = "none";
    playerScissorsBtn.style.display = "none";

    comRockBtn.style.display = "none";
    comPaperBtn.style.display = "none";
    comScissorsBtn.style.display = "none";

    lbl_pLose.textContent = "You Lose!";
    lbl_cWin.innerText = "01001001 00100000\n 01110111 01101001 01101110" ;

    gameLog.innerText = (`${computerSelection} > ${playerSelection}\n\nComputer won the game. Better luck next time.`);
    removePlayerOptionsText();

  }

}


// if either p or com win. remove the "pick an option from below text"
function removePlayerOptionsText() {
  var x = document.getElementById("selectText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function resetGame() {

  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  drawCounter = 0;

  showPlayerScore.innerHTML =  playerScore;
  showComputerScore.innerHTML =  computerScore;
  showDrawCount.innerHTML =  drawCounter;
 
}




function computerRandomPlay() {
  var computerRandomElement =
 rpsString[Math.floor(Math.random() * rpsString.length)];

  if (computerRandomElement == "rock")
 {
   comRockBtn.style.display = "initial";
   comPaperBtn.style.display = "none";
   comScissorsBtn.style.display = "none";

  
 }
 
 else if (computerRandomElement== "paper")
 {
   comPaperBtn.style.display = "initial";
   comRockBtn.style.display = "none";
   comScissorsBtn.style.display = "none";
 }
 
 else if (computerRandomElement == "scissors")
 {
   comScissorsBtn.style.display = "initial";
   comRockBtn.style.display = "none";
   comPaperBtn.style.display = "none";

   
 }

   
  return computerRandomElement;
}



function playRound(playerSelection, computerSelection) {

    if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    showGameLog.innerText = (`You won the round\n\n${playerSelection} > ${computerSelection}`);
    playerScore  ++;
  }      
  
  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    
    showGameLog.innerText = (`Computer won the round\n\n${computerSelection} > ${playerSelection}`);
    computerScore ++;
  }
  
  else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    playerSelection === "scissors" ||
    computerSelection === "scissors"
  ) {
    showGameLog.innerText = (`Tie\n\n${playerSelection} = ${computerSelection}`);
    drawCounter ++;
 
  }
   

  else {
      /*console.log("incorrect input"); */
  }
  
  
}
