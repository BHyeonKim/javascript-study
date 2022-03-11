'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const initDisplay = function (highscore) {
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = highscore;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
};

// Initialize variables
let secretNumber = generateRandomNumber();
let score = 20;
let highscore = 0;

//  When player click "Again btn"
document.querySelector('.again').addEventListener('click', function () {
  // Restore initial values
  secretNumber = generateRandomNumber();
  score = 20;

  // Restore to initial display
  initDisplay(highscore);
});

// When plater click "Check btn"`
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(`Secret number: ${secretNumber}`);

  // When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    // Check highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess number is differ from secretNumber
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // Check whether guess number is  high or low.
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      ``;
    }
  }
});
