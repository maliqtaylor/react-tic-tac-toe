import { useState } from "react";
import "./App.css";
import Board from "./Components/Board/Board";

function App() {
  const [winner, setWinner] = useState(null);
  return (
    <div className="App">
      <h1> Tic Tac Toe </h1>
      <Board winner={winner} setWinner={setWinner} />
    </div>
  );
}

export default App;
