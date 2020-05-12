/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again 
*/

// Game Variables
let min = 1,
    max = 10,
    winningNum = 2,
    guessessLeft = 3;

// UI Variables
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // Validate input
  if ( isNaN(guess) || guess < min || guess > max ) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // If guess is correct or not
  if ( guess === winningNum ) {
    // Disable input
    guessInput.disabled = true;
    // Change border color
    
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct! YOU WIN!!!`, 'green');
  } else {
    // Change border color
    guessInput.style.borderColor = 'red';
    // Set message
    setMessage(`Your guess is incorrect!, Please guess again`, 'red');
  }
});

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

