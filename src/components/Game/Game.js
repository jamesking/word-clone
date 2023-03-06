import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";
import WinBanner from "../WinBanner";
import LoseBanner from "../LoseBanner";

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
    const nextResults = [...results, result];

    if (resultCorrect) {
      setGameStatus("win");
    } else if (nextResults.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lose");
    }
    console.log({ resultCorrect });
    setResults(nextResults);
    setGuess("");
  }
  return (
    <>
      <GuessResults results={results} maxGuesses={NUM_OF_GUESSES_ALLOWED} />
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess} gameStatus={gameStatus}/>
      {gameStatus === "win" && <WinBanner numGuesses={results.length} />}
      {gameStatus === "lose" && <LoseBanner answer={answer} />}
    </>
  );
}

export default Game;
