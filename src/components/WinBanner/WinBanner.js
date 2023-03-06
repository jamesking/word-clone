import React from "react";
import Banner from "../Banner";

function WinBanner({numGuesses}) {
  return (
    <Banner status="happy">
      <strong>Congratulations!</strong> You got it in
      {" "}
      <strong>
        {numGuesses === 1 ? "1 guess" : `${numGuesses} guesses`}
      </strong>
      .
    </Banner>
  );
}

export default WinBanner;
