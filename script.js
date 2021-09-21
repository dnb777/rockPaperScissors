'use strict'

let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const actionMessage = document.getElementById('message');
const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const scissorsDiv = document.getElementById('scissors');


function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

function game(userChoice) {
  const computerChoice = computerPlay();

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice, computerChoice);
      break;
  };
};

function win(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  userScore++;
  userScore_span.textContent = userScore;
  actionMessage.textContent = `You Win! ${userChoice} beats ${computerChoice}`;
  userChoiceDiv.classList.add('greenGlow');
  setTimeout( () => userChoiceDiv.classList.remove('greenGlow'), 300);
};
function lose(userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.textContent = computerScore;
  actionMessage.textContent = `You Loose! ${computerChoice} beats ${userChoice}`
  userChoiceDiv.classList.add('redGlow');
  setTimeout( () => userChoiceDiv.classList.remove('redGlow'), 300);
};
function draw (userChoice, computerChoice) {
  const userChoiceDiv = document.getElementById(userChoice);
  actionMessage.textContent = `It's a Draw! both pick ${userChoice}`;
  userChoiceDiv.classList.add('greyGlow');
  setTimeout( () => userChoiceDiv.classList.remove('greyGlow'), 300);
}
function main() {
  rockDiv.addEventListener('click', () => game('rock'));
  paperDiv.addEventListener('click', () => game('paper'));
  scissorsDiv.addEventListener('click', () => game('scissors'));
};

main();
