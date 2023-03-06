import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  if(!guess){
    return (
      <p className="guess">
      {range(0, 5, 1).map((index) => (
        <span className="cell" key={`${index}')}`} />
      ))}
      </p>
    )
  }
  return (
    <p className="guess">
      {range(0, 5, 1).map((index) => (
        <span className="cell" key={`${index}`}>
          {(guess.charAt(index))}
        </span>
      ))}
    </p>
  );
}

export default Guess;
