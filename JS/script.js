"use strict";

// ? ELEMENTS SELECTION -

const btnContainer = document.querySelector(".btn-container");
const playerScore1 = document.querySelector("#player--1");
const playerScore2 = document.querySelector("#player--2");
const diceImg = document.querySelector(".dice");

let scores, activePlayer, current, playing;

// ? EVENT HANDLERS | FUNCTIONS -

const gameInit = function () {
	current = 0;
	activePlayer = 1;
	scores = [0, 0];
	playing = true;
};

gameInit();

const switchPlayer = function () {
	current = 0;
	document
		.querySelector(`#player-${activePlayer}`)
		.classList.remove("player--active");
	document.querySelector(`.player--${activePlayer}`).textContent = current;
	activePlayer = activePlayer === 1 ? 2 : 1;
	document
		.querySelector(`#player-${activePlayer}`)
		.classList.add("player--active");
};

btnContainer.addEventListener("click", function (e) {
	if (e.target.classList.contains("btn-new")) {
		current = 0;
		activePlayer = 1;
		scores.forEach((score) => (score = 0));
		playing = true;
		playerScore1.textContent =
			playerScore2.textContent =
			document.querySelector(".player--current").lastElementChild.textContent =
				0;
		document.querySelectorAll("section").forEach((section) => {
			section.classList.remove("player--active");
		});
		document
			.querySelector(`#player-${activePlayer}`)
			.classList.add("player--active");
	}

	if (playing) {
		// * ROLL BUTTON -
		if (e.target.classList.contains("btn-roll")) {
			const randomDice = Math.floor(Math.random() * 6) + 1;
			console.log(randomDice);
			diceImg.style.display = "block";
			diceImg.src = `Images/dice-${randomDice}.png`;

			if (randomDice === 1) {
				switchPlayer();
			} else {
				current += randomDice;
				document.querySelector(`.player--${activePlayer}`).textContent =
					current;
			}
		}

		// * BUTTON HOLD -
		if (e.target.classList.contains("btn-hold")) {
			if (scores[activePlayer - 1] >= 20) {
				document
					.querySelector(`#player-${activePlayer}`)
					.classList.add(".player--winner");
				playing = false;
			} else {
				scores[activePlayer - 1] += current;
				document.querySelector(`#player--${activePlayer}`).textContent =
					scores[activePlayer - 1];
				switchPlayer();
			}
		}
	}
});
