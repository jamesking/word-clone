import React from "react";

function GuessInput({guess, setGuess, handleGuess, gameStatus}) {

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleGuess();
      }}
      className="guess-input-wrapper"
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        disabled={gameStatus != 'playing'}
        value={guess}
        maxLength={5}
        minLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase());
        }}
        id="guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
