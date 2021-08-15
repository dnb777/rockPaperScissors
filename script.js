"use script"

function computerPlay() {
	let opciones = ['rock', 'paper', 'scissors'];
	return opciones[Math.floor(Math.random() * 3)];
}

function humanPlay() {
	let seleccion = prompt('Choose your weapon', '').toLowerCase();
	if (seleccion === 'rock' ||
		seleccion === 'paper' ||
		seleccion === 'scissors') {
		return seleccion;
	}else {
		alert('Invalid choise, pick again!');
		return humanPlay();
	}
}

function playRound(computerSelection, humanSelection) {
	if (humanSelection === computerSelection) {
		return `It's a tie! Both pick ${humanSelection.toUpperCase()}`;
	}else if (
		humanSelection === 'rock' && computerSelection === 'scissors' ||
		humanSelection === 'paper' && computerSelection === 'rock' ||
		humanSelection === 'scissors' && computerSelection === 'paper'
		) {
		humanScore++;
		return `Player Wins! ${humanSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
	}else {
		computerScore++;
		return `Bad Luck, Computer Wins! ${computerSelection.toUpperCase()} beats ${humanSelection.toUpperCase()}`;
	}
}

let humanScore = 0;
let computerScore = 0;

function keepScore(humanScore, computerScore) {
	if (humanScore > computerScore) {
		console.log(`Player Wins the Game!!\nThe final score is Player:${humanScore} - Computer:${computerScore}`);
	}else if(computerScore > humanScore) {
		console.log(`Computer Wins the Game!!\nThe final score is Computer:${computerScore} - Player:${humanScore}`);
	}else {
		console.log(`Tie Game!\nThe final score is Player:${humanScore} - Computer:${computerScore} `);
	};
}


function game() {

	for (let i = 0; i < 5; i++) {
		const humanSelection = humanPlay();
		const computerSelection = computerPlay();

		console.log(playRound(computerSelection, humanSelection));
	}
	return keepScore(humanScore, computerScore);
	
}

game();
