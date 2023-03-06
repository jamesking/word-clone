import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";

function GuessResults({ results, maxGuesses }) {
  return (
    <div className="guess-results">
      {range(0, maxGuesses, 1).map((index) =>
        results[index] ? (
          <Guess key={results[index].id} guess={results[index].guess} />
        ) : (
          <Guess key={`blank-${index}`} />
        )
      )}
    </div>
  );
}

export default GuessResults;
