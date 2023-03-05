import React from "react";

function GuessResults({results}) {
  return (
    <div className="guess-results">
      {results.map((result) => (
        <p key={result.id} className="guess">{result.guess}</p>
      ))}
    </div>
  );
}

export default GuessResults;
