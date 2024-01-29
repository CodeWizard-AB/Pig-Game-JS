"use strict";

// ? ELEMENTS SELECTION -

const btnContainer = document.querySelector(".btn-container");
const playerScore1 = document.querySelector("#player--1");
const playerScore2 = document.querySelector("#player--2");

let scores, activePlayer, current;

// ? EVENT HANDLERS | FUNCTIONS -

current = 0;
activePlayer = 1;
scores = [0, 0];

btnContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("btn-new")) {
	}

	// * ROLL BUTTON -
	if (e.target.classList.contains("btn-roll")) {
		const randomDice = Math.floor(Math.random() * 6) + 1;
		const diceImg = document.querySelector(".dice");
		diceImg.src = `Images/dice-${randomDice}.png`;

		if (randomDice === 1) {
			current = 0;
			document
				.querySelector(`#player-${activePlayer}`)
				.classList.remove("player--active");
			document.querySelector(`.player--${activePlayer}`).textContent = current;
			activePlayer = activePlayer === 1 ? 2 : 1;
			document
				.querySelector(`#player-${activePlayer}`)
				.classList.add("player--active");
		} else {
			current += randomDice;
			document.querySelector(`.player--${activePlayer}`).textContent = current;
		}
	}

	// * BUTTON HOLD -
	if (e.target.classList.contains("btn-hold")) {
		scores[activePlayer - 1] += current;
		document.querySelector(`#player--${activePlayer}`).textContent =
			scores[activePlayer - 1];
	}
});
