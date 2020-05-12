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

// Play again event listener
game.addEventListener('mousedown', function(e) {
  if ( e.target.className === 'play-again' ) {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);
  // Validate input
  if ( isNaN(guess) || guess < min || guess > max ) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }
  // If guess is correct or not
  if ( guess === winningNum ) {
    // Won
    gameOver(true, `${winningNum} is correct! YOU WIN!!!`);
  } else {
    // Wrong guess counter
    guessessLeft -= 1;
    // Check if there's still guesses left
    if ( guessessLeft === 0 ) {
      // Lost
      gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
    } else {
      // Game continues
      // Change border color
      guessInput.style.borderColor = 'red';
      // Clear input
      guessInput.value = '';
      // Set message
      setMessage(`${guess} is not correct, ${guessessLeft} guesses left`, 'red');
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  // Disable input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = color;
  // Set message
  setMessage(msg, color);
  // Play again
  guessBtn.value = 'Play Again';
  guessBtn.className = 'play-again';

}

// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

