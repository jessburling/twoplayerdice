// Variables 

let scores, roundScore, activePlayer, gamePlaying;

init();
// When i matches the number in the file name the image will display
// In this case we are generating numbers 1-6
let diceImgs = [];
    // Loops through the array up to 6
    for (let i = 1; i<= 6; i++) {
        diceImgs[i] = `dice-${i}.png`;
    }


// Called when the game is loaded
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

	document.querySelector('#dice').style.visibility = 'hidden';

// Reset scores

    document.getElementById("score-0").textContent = " ";
    document.getElementById("score-1").textContent = " ";
    document.getElementById("current-0").textContent = " ";
    document.getElementById("current-1").textContent = " ";

// Reset player bg colour

    document.querySelector(".p0-panel").classList.remove("active");
    document.querySelector(".p1-panel").classList.remove("active");
    document.querySelector(".p0-panel").classList.add("active");

}


// New game button
document.querySelector("#btn-new-game").addEventListener("click", init);

// Roll dice button
document.querySelector("#btn-roll").addEventListener("click", function () {

    document.querySelector('#dice').style.visibility = 'visible';


    // Check game is playing
        if (gamePlaying) {
    
    // Generate two random numbers and store in variables and show the dice
        let scores = Math.floor(Math.random() * 6)+1;
        document.getElementById("dice").src = diceImgs[scores];

    // Update the round score if a 1 isn't rolled
    if (scores !== 1) {
        // Add up score
        roundScore += scores;
        document.querySelector("#current-"+ activePlayer).textContent = roundScore;
    } else {
        // Switch player
        document.querySelector("#current-"+ activePlayer).textContent = "You rolled a 1!";
        nextPlayer();
    }
}
});

// Switch player function
function nextPlayer() {
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(".p0-panel").classList.toggle(".active")
    document.querySelector(".p1-panel").classList.toggle(".active")
}


// Hold score button
document.querySelector("#btn-hold").addEventListener("click", function () {

    if(gamePlaying) {
        // ???
        scores[activePlayer] += roundScore;

        // Update UI
        document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];

        let winningScore = 20;

        if (scores[activePlayer] >= winningScore) {
            document.querySelector("#score-" + activePlayer).textContent = "You have won!"
            gamePlaying = false;

    }   else {
        nextPlayer();
    }
}
        
});



// // Our starting score will be 0
// let totalScore = 0;
// // Starting hold score is 0
// let holdScore = 0;

// // By default p1 panel background colour is this colour
// document.getElementById("p1-panel").style.backgroundColor = "#d7f4e1";
// // By defualt dice are hidden until game starts
// document.getElementById("dice").style.visibility = "hidden";

// // Roll button event listener to start the roll dice function for p1
// document.getElementById("btn-roll").addEventListener('click', () => {
//     p1RollDice();
// });

// // P1 Roll dice function
// function p1RollDice() {
// // Sets the dice images to be visible
//     document.getElementById("dice").style.visibility = "visible";
// // Generates a random whole number between 0 - 6 and then plus 1 to stop 0 being produced
//     let diceScore = Math.floor(Math.random() * 6)+1;
// // Calls the array image based on the dice score number (line 11)
//     document.getElementById("dice").src = imageArray[diceScore];
// // If the dice rolls a 1, then call the end game function (line 58)
//     if (diceScore == 1) {
//         alert("You lose");
//         // endGame();
// // Otherwise add total score (starting at 0) to the dice score
//     } else {
//         totalScore += diceScore;
// // Display the total score in the score HTML div and then check the score (line 68)
//         document.getElementById("p1-current-display").innerHTML = totalScore;
// }



// // New game - resets everything
// // Button event listener - listens to click
// document.getElementById("btn-new-game").addEventListener('click', () => {
//     // Resets the score back to 0
//         totalScore = 0;
//         holdScore = 0;
//     // Displays the roll button again
//         document.getElementById("btn-roll").style.visibility = "visible";
//     // Resets p1 total score to 0, which we declared at the start
//         document.getElementById("p1-hold-score").innerHTML = holdScore;
//     // Resets p2 total score to 0, which we declared at the start
//         document.getElementById("p2-hold-score").innerHTML = holdScore;
//     // Resets p1 total score to 0, which we declared at the start
//         document.getElementById("p1-current-display").innerHTML = totalScore;
//     // Resets p2 total score to 0, which we declared at the start
//         document.getElementById("p2-current-display").innerHTML = totalcore;
//     // The dice is hidden until you roll again 
//         document.getElementById("dice").style.visibility = "hidden";
//     // P1 Panel background colour
//         document.getElementById("p1-panel").style.backgroundColor = "#d7f4e1";
//     });}