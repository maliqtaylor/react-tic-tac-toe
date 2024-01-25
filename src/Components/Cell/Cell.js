import React, { useState } from "react";
import "./Cell.css";

function Cell({ playerMove, togglePlayerMove, row, column, updateBoard }) {
  // Every cell starts as a blank slate
  const [cellValue, setCellValue] = useState(null);

  return (
    <div className="cell" onClick={() => makeMove()}>
      <p>{cellValue}</p>
    </div>
  );

  function makeMove() {
    if (cellValue) return;
    setCellValue(playerMove);
    updateBoard(row, column, playerMove);
    togglePlayerMove();
  }
}

export default Cell;
