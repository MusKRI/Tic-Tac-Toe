import React from "react";

const Announcer = ({ Result }) => {
  let announceClass;
  let displayMsg;

  if (Result.state === "none") {
    announceClass = "hide";
    displayMsg = "";
  } else if (Result.state === "WON") {
    announceClass = "";
    displayMsg = `Player ${Result.winner} has WON.`;
  } else {
    announceClass = "";
    displayMsg = `Match Tie...`;
  }
  return <section className={`display ${announceClass}`}>{displayMsg}</section>;
};

export default Announcer;
