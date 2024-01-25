import React, { useState } from "react";
import "./Cell.css";

function Cell({
  playerMove,
  togglePlayerMove,
  row,
  column,
  updateBoard,
  winner,
}) {
  // Every cell starts as a blank slate
  const [cellValue, setCellValue] = useState(null);

  return (
    <div className="cell" onClick={() => makeMove()}>
      <p>{cellValue}</p>
    </div>
  );

  function makeMove() {
    if (cellValue || winner) return;
    setCellValue(playerMove);
    updateBoard(row, column, playerMove);
    console.log(winner);
    togglePlayerMove();
  }
}

export default Cell;
