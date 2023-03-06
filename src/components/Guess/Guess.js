import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span className={guess ? `cell ${guess[index].status}` : 'cell' } key={`${index}`}>
          {guess ? guess[index].letter : undefined }
        </span>
      ))}
    </p>
  );
}

export default Guess;
