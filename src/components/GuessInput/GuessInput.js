import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  function handleGuess() {
    console.log(guess);
    setGuess("");
  }
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
