import React from "react";

const Tile = ({ val, onClick, Deny }) => {
  const playerClass = val === "X" ? "player-x" : "player-o";
  const denyClass = Deny ? "deny" : "";
  return (
    <div className={`tile ${playerClass} ${denyClass}`} onClick={onClick}>
      {val}
    </div>
  );
};

export default Tile;
