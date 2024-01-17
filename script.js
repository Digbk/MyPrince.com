let randomNumber, attempts;

function startNewGame() {
    // Reset variables for a new game
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;

    // Reset UI
    document.getElementById('output').innerHTML = 'Try to guess the number between 1 and 10.';
    document.getElementById('guessInput').value = '';

    // Show the input and submit button
    document.getElementById('guessInput').style.display = 'block';
    document.getElementById('submitBtn').style.display = 'block';

    // Hide the new game button
    document.getElementById('newGameBtn').style.display = 'none';
}

document.getElementById('submitBtn').addEventListener('click', checkGuess);

function checkGuess() {
    // Get the user's guess from the input
    const userGuess = document.getElementById('guessInput').value;

    // Check if the guess is correct, too high, or too low
    if (userGuess == randomNumber) {
        document.getElementById('output').innerHTML = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        // Hide the input and submit button
        document.getElementById('guessInput').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        // Show the new game button
        document.getElementById('newGameBtn').style.display = 'block';
    } else if (userGuess > randomNumber) {
        document.getElementById('output').innerHTML = 'Too high! Try again.';
    } else {
        document.getElementById('output').innerHTML = 'Too low! Try again.';
    }

    // Increment the attempts
    attempts++;
}
