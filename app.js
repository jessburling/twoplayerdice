// When i matches the number in the file name the image will display
// In this case we are generating numbers 1-6
let imageArray = [];
    // Loops through the array up to 6
    for (let i = 1; i<= 6; i++) {
        imageArray[i] = `dice-${i}.png`;
    }

btnRoll = document.getElementById("btn-roll");
btnHold = document.getElementById("btn-hold");














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