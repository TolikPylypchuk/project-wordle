import React from "react";

function GameBanner({ won, answer, numGuesses }) {
  return won ? (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numGuesses} {numGuesses === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  ) : (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

export default GameBanner;
