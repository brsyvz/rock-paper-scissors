let rpsArrContainer = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let drawCounter = 0;
let playerSelection = "";

let gameLog = document.getElementById("log");

let rockBtn = document.getElementById("rockBtn");
let paperBtn = document.getElementById("paperBtn");
let scissorsBtn = document.getElementById("scissorsBtn");

let rockBtnC = document.getElementById("rockBtnC");
let paperBtnC = document.getElementById("paperBtnC");
let scissorsBtnC = document.getElementById("scissorsBtnC");


let lbl_playerScore = document.getElementById("lbl_playerScore");
let lbl_computerScore = document.getElementById("lbl_computerScore");
let lbl_draw = document.getElementById("lbl_draw");


let lbl_pWin = document.getElementById("lbl_pWin");
let lbl_pLose = document.getElementById("lbl_pLose");
let lbl_cWin = document.getElementById("lbl_cWin");
let lbl_cLost = document.getElementById("lbl_cLost");

rockBtn.addEventListener('click',rockBtnClicked);
paperBtn.addEventListener('click',paperBtnClicked);
scissorsBtn.addEventListener('click',scissorsBtnClicked);

  
lbl_playerScore.innerHTML =  playerScore;
lbl_computerScore.innerHTML = computerScore;
lbl_draw.innerHTML = drawCounter;



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
  let computerSelection = computerPlay(); 
  playRound(playerSelection, computerSelection);
  
 
  lbl_playerScore.innerHTML = playerScore;
  lbl_computerScore.innerHTML = computerScore;
  lbl_draw.innerHTML =  drawCounter;
 
   if (playerScore >= 5) 
  {
      
    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
    
    rockBtnC.style.display = "none";
    paperBtnC.style.display = "none";
    scissorsBtnC.style.display = "none";

    lbl_pWin.textContent = "You Win!";
    lbl_cLost.innerText =  " 01001001 00100000 01101100 \n 01101111 01110011 01110100";
   
    gameLog.innerText = (`${playerSelection} > ${computerSelection}\n\nYou won the game Congratulations!.`);
    removeText();
 
  }

  else if (computerScore >=5 ) {

    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";

    rockBtnC.style.display = "none";
    paperBtnC.style.display = "none";
    scissorsBtnC.style.display = "none";

    lbl_pLose.textContent = "You Lose!";
    lbl_cWin.innerText = "01001001 00100000\n 01110111 01101001 01101110" ;

    gameLog.innerText = (`${computerSelection} > ${playerSelection}\n\nComputer won the game.`);
    removeText();

  }

}


function removeText() {
  var x = document.getElementById("selectText");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


function reset() {

  playerScore = 0;
  computerScore = 0;
  roundCounter = 0;
  drawCounter = 0;

  lbl_playerScore.innerHTML =  playerScore;
  lbl_computerScore.innerHTML =  computerScore;
  lbl_draw.innerHTML =  drawCounter;
 
}




function computerPlay() {
  var computerRandomElement =
  rpsArrContainer[Math.floor(Math.random() * rpsArrContainer.length)];

  if (computerRandomElement == "rock")
 {
   rockBtnC.style.display = "initial";
   paperBtnC.style.display = "none";
   scissorsBtnC.style.display = "none";

  
 }
 
 else if (computerRandomElement== "paper")
 {
   paperBtnC.style.display = "initial";
   rockBtnC.style.display = "none";
   scissorsBtnC.style.display = "none";
 }
 
 else if (computerRandomElement == "scissors")
 {
   scissorsBtnC.style.display = "initial";
   rockBtnC.style.display = "none";
   paperBtnC.style.display = "none";

   
 }

   
  return computerRandomElement;
}



function playRound(playerSelection, computerSelection) {

    if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    gameLog.innerText = (`You won the round\n\n${playerSelection} > ${computerSelection}`);
    playerScore  ++;
  }      
  
  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    
    gameLog.innerText = (`Computer won the round\n\n${computerSelection} > ${playerSelection}`);
    computerScore ++;
  }
  
  else if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    playerSelection === "scissors" ||
    computerSelection === "scissors"
  ) {
    gameLog.innerText = (`Tie\n\n${playerSelection} = ${computerSelection}`);
    drawCounter ++;
 
  }
   

  else {
      /*console.log("incorrect input"); */
  }
  
  
}
