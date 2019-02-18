/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Declaring the variable names that can be defined later in the fuction
// For the current score, the overall score, active player and if the game is playing
var scores, roundScore, activePlayer, gamePlaying;
// Calling the roll dice button and assigning the btnRoll variable name
var btnRoll = document.querySelector('.btn-roll');
// Calling the hold score button and assigning the btnHold variable name
var btnHold = document.querySelector('.btn-hold');

// Dice image names are diceimg, active player, dice number
var diceimgs = {
 diceimg01: "https://cdn.pbrd.co/images/70YJMCVVR.png",
 diceimg02: 'https://cdn.pbrd.co/images/711lemsMX.png',
 diceimg03: "https://cdn.pbrd.co/images/711NjfjV5.png",
 diceimg04: "https://cdn.pbrd.co/images/712dK3C2z.png",
 diceimg05: "https://cdn.pbrd.co/images/70Zqc4icX.png",
 diceimg06: "https://cdn.pbrd.co/images/712DzRw22.png",
 diceimg11: "https://cdn.pbrd.co/images/713n3lHQN.png",
 diceimg12: 'https://cdn.pbrd.co/images/713JSMJDr.png',
 diceimg13: "https://cdn.pbrd.co/images/HvoZO4Gb.png",
 diceimg14: "https://cdn.pbrd.co/images/HvqN3Kjq.png",
 diceimg15: "https://cdn.pbrd.co/images/714IXBStH.png",
 diceimg16: "https://cdn.pbrd.co/images/714ZovsdD.png"
};

// By default when the window loads the init() function runs (this is resetting everything)
init();


// Function for when the roll dice button is clicked
document.querySelector('.btn-roll').addEventListener('click', function(){
// If game is playing (true)
	if (gamePlaying) {
// Generate a random whole number between 1 -6 but not 0
		var dice = Math.floor(Math.random() * 6) + 1;

// Create a variable name for the dice div called 'diceDOM'
        var diceDOM = document.querySelector('.dice');
// Style that div as block
        diceDOM.style.display = 'block';
// Update the dice image by calling on the diceimg active player and dice values
		diceDOM.src = diceimgs['diceimg' + activePlayer + dice];
// Display the current score in the innerhtml for the current '?' div
		document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// If the dice is not equal to 1
		if (dice !== 1) {
// Do this function (which is to hide the 'player rolled a 1 and lost' message)
			hideRolledMsg();
// And then add the dice score
            roundScore += dice;
// Display the score in the active players current box
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		} else {
// Else 
// Disable the button function after a period of time?
            disableBtn(btnRoll, 1000);
// Do this function (which is to hide the 'player rolled a 1 and lost' message)
            hideRolledMsg();
// Show the player '?' rolled a 1 message
            document.querySelector('.player-'+activePlayer+'-rolled-1').style.visibility = 'visible';
// Go the next player function
			nextPlayer();		
		}
	}
	
		
});



document.querySelector('.btn-hold').addEventListener('click', function(){
		if (gamePlaying) {
			disableBtn(btnRoll, 1000);
			// Add current score to global score
			scores[activePlayer] += roundScore;	

			//Update the UI
			document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

			//check if player won the game

			if (scores[activePlayer] >= 50) {
				document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
				document.querySelector('.dice').style.display = 'none';
				document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner-' + activePlayer);
				document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
				gamePlaying = false;

			} else {
				nextPlayer();
			}
		}
		
		
});


document.querySelector('.btn-new').addEventListener('click', init);

// document.querySelector('.btn-rules').addEventListener('click', function(){
// 	    var games = document.getElementsByClassName('game-panel');
// 		for(i=0;i<games.length;i++){
// 			games[i].style.display = 'none';
// 		}
	    
// 	    document.querySelector('.btn-back').style.display = 'block';
// 		var rules = document.getElementsByClassName('rules-panel');
// 		for(i=0;i<rules.length;i++){
// 			rules[i].style.display = 'block';
// 		}
	
// });

// document.querySelector('.btn-back').addEventListener('click', function(){
// 	    var games = document.getElementsByClassName('game-panel');
// 		for(i=0;i<games.length;i++){
// 			games[i].style.display = 'block';
// 		}
	    
// 	    document.querySelector('.btn-back').style.display = 'none';
// 		var rules = document.getElementsByClassName('rules-panel');
// 		for(i=0;i<rules.length;i++){
// 			rules[i].style.display = 'none';
// 		}
	
// });

function init() {
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
	
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	document.querySelector('.player-0-panel').classList.add('active-0');
	document.querySelector('.player-0-panel').classList.remove('winner-0');
	document.querySelector('.player-1-panel').classList.remove('winner-1');

}

function nextPlayer() {
	//next player
		var icons = document.getElementsByTagName('i');
		for(i=0;i<icons.length;i++){
			icons[i].classList.remove('color-' + activePlayer);
		}
		
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active-' + activePlayer);
		activePlayer ===0 ? activePlayer = 1 : activePlayer = 0;
		roundScore = 0;
		
		for(i=0;i<icons.length;i++){
			icons[i].classList.add('color-' + activePlayer);
		}
		document.querySelector('.player-' + activePlayer + '-panel').classList.add('active-' + activePlayer);
		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
}

function disableBtn(btn, time) {
	   //disable button
		btn.disabled = true;
      	setTimeout(function(){btn.disabled = false;},time);
}

function hideRolledMsg(){
	document.querySelector('.player-0-rolled-1').style.visibility = 'hidden';
	document.querySelector('.player-1-rolled-1').style.visibility = 'hidden';
}


