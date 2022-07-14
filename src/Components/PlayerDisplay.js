import React from "react";

const PlayerDisplay = ({ player }) => {
  const playerClass = player === "X" ? "player-x" : "player-o";

  return (
    <section className="display">
      Player <span className={`display-player ${playerClass}`}>{player}</span>'s
      Turn
    </section>
  );
};

export default PlayerDisplay;
