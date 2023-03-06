import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults"
import {NUM_OF_GUESSES_ALLOWED} from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState("");
  const [results, setResults] = React.useState([]);

  function handleGuess() {
    if(results.length >= NUM_OF_GUESSES_ALLOWED){
      window.alert('Max number of guesses reached!')
      return
    }
    console.log(`Guess: ${guess}`);
    const nextResults = [...results, {guess: guess, id: Math.random()}];
    setResults(nextResults);
    console.log({nextResults});
    setGuess("");
  }
  return (
    <>
      <GuessResults results={results} maxGuesses={NUM_OF_GUESSES_ALLOWED}/>
      <GuessInput guess={guess} setGuess={setGuess} handleGuess={handleGuess}/>
    </>
  );
}

export default Game;
