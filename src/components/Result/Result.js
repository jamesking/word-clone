import React from "react";

function Result({ gameStatus, numGuesses, answer }) {
  let bannerMessage = ""
  
  if(gameStatus === "win"){
    bannerMessage = <><strong>Congratulations!</strong> got it in <strong>{numGuesses} guess{numGuesses > 1 ? 'es' : ''}</strong>.</>
  } else if(gameStatus === "lose"){
    bannerMessage = <><strong>Sorry!</strong> the correct answer is <strong>{answer}</strong>.</>
  }
  
  return (
    <div className={`banner ${gameStatus === "win" ? "happy" : "sad"}`}>{bannerMessage}</div>
  );
}

export default Result;
