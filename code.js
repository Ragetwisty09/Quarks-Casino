// This function is called when the user clicks the "Roll the Dice!" button
function playGame() {
    // Generate two random numbers between 1 and 6 (representing dice rolls)
    let dice1 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6 for the first die
    let dice2 = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6 for the second die
    
    // Calculate the sum of the dice rolls
    let total = dice1 + dice2;

    // Output the dice rolls and result to the webpage
    let resultText = "You rolled a " + dice1 + " and a " + dice2 + ". Total: " + total + ". ";

    // Determine if the player wins or loses based on the total
    if (total === 7 || total === 11) {
        resultText += "You win! 🎉";
    } else if (total === 2 || total === 3 || total === 12) {
        resultText += "You lose! 😞";
    } else {
        resultText += "Try again! 🤞";
    }

    // Display the result in the HTML element with id="result"
    document.getElementById("result").innerHTML = resultText;
}

// This function takes a string as a parameter and displays it on the screen
function displayMessage(message) {
    document.getElementById("result").innerHTML = message;
}
