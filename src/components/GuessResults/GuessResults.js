import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ results, maxGuesses }) {
  return (
    <div className="guess-results">
      {range(maxGuesses).map((index) => (
          <Guess key={index} guess={results[index]} />
      ))}
    </div>
  );
}

export default GuessResults;
