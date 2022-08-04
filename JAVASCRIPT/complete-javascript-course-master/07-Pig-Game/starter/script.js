'use strict';
let scoreZero = document.querySelector('#score--0');
let scoreZo = document.getElementById('score--0');
let scoreOne = document.getElementById('score--1');
let dice = document.querySelector('.dice');
let playerZero = document.querySelector('.player--0');
let playerOne = document.querySelector('.player--1');

scoreZo.textContent = 0;
scoreOne.textContent = 0;
dice.classList.add('hidden');

let btnNew = document.querySelector('.btn--new');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let cScore0 = document.getElementById('current--0');
let cScore1 = document.getElementById('current--1');

let scores, currentScore, activePlayer, playing;
let int = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};
int();

let switchPlayer = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  playerZero.classList.toggle('player--active');
  playerOne.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let diceRoll = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceRoll}.png`;
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 30) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  playerZero.classList.remove('player--winner');
  playerOne.classList.remove('player--winner');
  cScore0.textContent = 0;
  cScore1.textContent = 0;
  scoreZo.textContent = 0;
  scoreOne.textContent = 0;
  int();
});
