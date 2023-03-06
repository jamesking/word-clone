import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import Result from "../Result";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState("playing");

  function handleGuess() {
    const result = checkGuess(guess, answer);
    const resultCorrect = result.every((entry) => entry.status === "correct");
    if (resultCorrect) {
      setGameStatus("win");
    } else if(results.length + 1 >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus("lose")
    }
    console.log({ resultCorrect });
    const nextResults = [...results, result];
    setResults(nextResults);
    setGuess("");
  }
  return (
    <>
      <GuessResults results={results} maxGuesses={NUM_OF_GUESSES_ALLOWED} />
      {gameStatus != "playing" ? (
        <Result gameStatus={gameStatus} numGuesses={results.length} answer={answer} />
      ) : (
        <GuessInput
          guess={guess}
          setGuess={setGuess}
          handleGuess={handleGuess}
        />
      )}
    </>
  );
}

export default Game;
