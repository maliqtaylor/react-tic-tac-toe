import React, { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.css";

function Board() {
  const [playerMove, setPlayerMove] = useState("X");
  const [boardState, setBoardState] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }).fill(null))
  );
  const [winner, setWinner] = useState(null);

  const gameBoard = createBoard();

  function togglePlayerMove() {
    playerMove === "X" ? setPlayerMove("O") : setPlayerMove("X");
  }

  function checkColums() {
    const board = [...boardState];
    for (let i = 0; i < 3; i++) {
      const top = board[0][i];
      const mid = board[1][i];
      const bot = board[2][i];
      if (top) {
        if (top === mid && mid === bot) {
          return true;
        }
      }
    }
    return false;
  }

  function checkRows() {
    const board = [...boardState];
    for (let i = 0; i < 3; i++) {
      const first = board[i][0];
      const second = board[i][1];
      const third = board[i][2];
      if (first) {
        if (first === second && second === third) {
          return true;
        }
      }
    }
    return false;
  }

  function checkDiagonals() {
    const board = [...boardState];
    const decline = [board[0][0], board[1][1], board[2][2]];
    const incline = [board[2][0], board[1][1], board[0][2]];
    const diagonals = [incline, decline];

    for (let diagonal of diagonals) {
      const joined = diagonal.join("");
      const winner = joined === "XXX" || joined === "OOO";
      if (winner) {
        return true;
      }
    }
    return false;
  }

  function updateBoard(column, row, move) {
    boardState[column][row] = move;
    setBoardState(boardState);
    if (checkRows() || checkColums() || checkDiagonals()) {
      setWinner(move);
    }
    console.log(winner);
  }

  return (
    <div className="board">
      {gameBoard}
      {winner ? `${winner} wins!` : null}
    </div>
  );

  function createBoard() {
    const allCells = [];
    for (let i = 0; i < 3; i++) {
      allCells.push(createRow(i));
    }
    return allCells;
  }

  function createRow(rowNumber) {
    const row = [];
    for (let i = 0; i < 3; i++) {
      row.push(
        <Cell
          key={i}
          togglePlayerMove={togglePlayerMove}
          playerMove={playerMove}
          row={rowNumber}
          column={i}
          updateBoard={updateBoard}
        />
      );
    }
    return row;
  }
}

export default Board;
