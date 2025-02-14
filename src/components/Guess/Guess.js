import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ word, answer }) {
  const result = checkGuess(word, answer) || [];

  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className={`cell ${result[index]?.status ?? ""}`}>
          {result[index]?.letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
