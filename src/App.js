import React, { useState, useEffect } from "react";
import "./Styling/App.css";
import { Announcer, PlayerDisplay, Tile } from "./Components/index";
import { Conditions } from "./Conditions";

const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({
    winner: "none",
    state: "none",
  });
  const [deny, setDeny] = useState(false);

  useEffect(() => {
    checkIfTie();
    checkWin();

    setPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }, [board]);

  // useEffect(() => {
  //   if (result.state !== "none") {
  //     alert(`Game Finished. Winning Player: ${result.winner}`);
  //   }
  // }, [result]);

  function handleClick(tileNumber) {
    setBoard((prevBoard) => {
      return prevBoard.map((val, idx) => {
        if (idx === tileNumber && val === "") {
          return player;
        }
        return val;
      });
    });
  }

  const checkWin = () => {
    Conditions.forEach((currCondition) => {
      const firstPlayer = board[currCondition[0]];

      if (firstPlayer === "") {
        return;
      }

      let foundWinningPattern = true;
      currCondition.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });

      if (foundWinningPattern) {
        setResult({ winner: player, state: "WON" });
        setDeny(true);
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((tile) => {
      if (tile === "") {
        filled = false;
      }
    });

    if (filled) {
      setResult({ winner: "No One", state: "Tie" });
      setDeny(true);
    }
  };

  function resetGame() {
    setBoard((prevBoard) => {
      return prevBoard.map((val) => {
        return "";
      });
    });

    setResult({ winner: "none", state: "none" });
    setDeny(false);
    setPlayer("O");
  }

  return (
    <main className="background">
      <section className="title">
        <h1>Tic Tac Toe</h1>
      </section>
      <PlayerDisplay player={player} />
      <section className="container">
        <Tile val={board[0]} onClick={() => handleClick(0)} Deny={deny} />
        <Tile val={board[1]} onClick={() => handleClick(1)} Deny={deny} />
        <Tile val={board[2]} onClick={() => handleClick(2)} Deny={deny} />
        <Tile val={board[3]} onClick={() => handleClick(3)} Deny={deny} />
        <Tile val={board[4]} onClick={() => handleClick(4)} Deny={deny} />
        <Tile val={board[5]} onClick={() => handleClick(5)} Deny={deny} />
        <Tile val={board[6]} onClick={() => handleClick(6)} Deny={deny} />
        <Tile val={board[7]} onClick={() => handleClick(7)} Deny={deny} />
        <Tile val={board[8]} onClick={() => handleClick(8)} Deny={deny} />
      </section>
      <Announcer Result={result} />
      <section className="controls">
        <button id="reset" onClick={resetGame}>
          Reset
        </button>
      </section>
    </main>
  );
};

export default App;
