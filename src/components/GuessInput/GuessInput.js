import React from "react";

function GuessInput({ onSubmit }) {
  const wordLength = 5;

  const [guess, setGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length === wordLength) {
      onSubmit(guess);
      setGuess("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={wordLength}
        maxLength={wordLength}
        pattern="[a-zA-Z]{5}"
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
