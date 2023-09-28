import React from "react";

function Guess({ word }) {
  const actualWord = word || "     ";

  // Words are short so using the index as the key is fine
  return (
    <p className="guess">
      {actualWord.split("").map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
