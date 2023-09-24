import React from "react";

function GuessInput() {
  const wordLength = 5;

  const [guess, setGuess] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();

    if (guess.length === wordLength) {
      console.log(guess);
      setGuess("");
    }
  }

  return (
    <form onSubmit={onSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        minLength={wordLength}
        maxLength={wordLength}
        value={guess}
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
