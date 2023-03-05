import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = React.useState([]);

  function handleGuess() {
    console.log(`Guess: ${guess}`);
    const nextResults = [...results];
    nextResults.push({guess: guess, id: Math.random()});
    setResults(nextResults);
    console.log(`Results: ${nextResults}`);
    setGuess("");
  }
  return (
    <>
      <GuessResults results={results} />
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess}/>
    </>
  );
}

export default Game;
