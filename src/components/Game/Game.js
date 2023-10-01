import React from "react";
import GuessInput from "../GuessInput";
import GuessList from "../GuessList";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GameBanner from "../GameBanner/GameBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [won, setWon] = React.useState(null);

  function onGuessSubmitted(guess) {
    if (won !== null) {
      return;
    }

    const nextGuess = { word: guess, id: Math.random() };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setWon(true);
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setWon(false);
    }
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} />
      <GuessInput enabled={won === null} onSubmit={onGuessSubmitted} />
      {won !== null && (
        <GameBanner won={won} answer={answer} numGuesses={guesses.length} />
      )}
    </>
  );
}

export default Game;
