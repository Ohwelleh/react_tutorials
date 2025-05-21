import { useState, useEffect } from "react";

const WIN_CONDITIONS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const initialCells: string[] = ["", "", "", "", "", "", "", "", ""];
const initialComputerChoices: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function check_winner(currentCells: string[]): [boolean, string] {
  for (let i = 0; i < WIN_CONDITIONS.length; i++) {
    const condition = WIN_CONDITIONS[i];
    const cellA = currentCells[condition[0]];
    const cellB = currentCells[condition[1]];
    const cellC = currentCells[condition[2]];

    if (cellA === "" || cellB === "" || cellC === "") continue;

    if (cellA === cellB && cellB === cellC) {
      return [true, cellA === "X" ? "Player Wins!!!!" : "Computer Wins!!!"];
    }
  }

  return [false, ""];
}

function TicTacToe() {
  const [cells, setCells] = useState<string[]>(initialCells);
  const [status, setStatus] = useState<string>("Player's Turn");
  const [computerChoices, setComputerChoices] = useState<number[]>(
    initialComputerChoices
  );
  const [playerTurn, setPlayerTurn] = useState<boolean>(true);

  function restart_game() {
    setCells(initialCells);
    setComputerChoices(initialComputerChoices);
    setPlayerTurn(true);
    setStatus("Player's Turn");
  }

  function cell_clicked(cellNumber: number) {
    if (cells[cellNumber] !== "") return;

    let newCells = [...cells];
    let computerCellsArray = [...computerChoices];

    let computerOptions = computerCellsArray.filter(
      (index) => index != cellNumber
    );
    newCells[cellNumber] = "X";

    // Updating states.
    setPlayerTurn(false);
    setComputerChoices(computerOptions);
    setStatus("Computer's Turn");
    setCells(newCells);
  }

  function computerTurn() {
    // Computer playing.
    let computerCells = [...cells];
    let computerCellNumber =
      computerChoices[Math.floor(Math.random() * computerChoices.length)];
    let computerCellsArray = [...computerChoices];

    let computerOptions = computerCellsArray.filter(
      (index) => index != computerCellNumber
    );

    computerCells[computerCellNumber] = "O";
    setComputerChoices(computerOptions);
    setStatus("Player's Turn");
    setCells(computerCells);
  }

  useEffect(() => {
    let result: [boolean, string] = check_winner(cells);
    if (result[0]) {
      setStatus(result[1]);
      setPlayerTurn(true);
    }

    // Delaying the computer's turn by 2 seconds to allow the board to update players turn.
    setTimeout(() => {
      if (!playerTurn && !result[0]) {
        computerTurn();
        setPlayerTurn(true);
      }
    }, 1000);
  }, [cells]);

  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <div className="cell-container">
        <div
          data-cellindex="0"
          className="cell"
          onClick={() => cell_clicked(0)}
        >
          {cells[0]}
        </div>
        <div
          data-cellindex="1"
          className="cell"
          onClick={() => cell_clicked(1)}
        >
          {cells[1]}
        </div>
        <div
          data-cellindex="2"
          className="cell"
          onClick={() => cell_clicked(2)}
        >
          {cells[2]}
        </div>
        <div
          data-cellindex="3"
          className="cell"
          onClick={() => cell_clicked(3)}
        >
          {cells[3]}
        </div>
        <div
          data-cellindex="4"
          className="cell"
          onClick={() => cell_clicked(4)}
        >
          {cells[4]}
        </div>
        <div
          data-cellindex="5"
          className="cell"
          onClick={() => cell_clicked(5)}
        >
          {cells[5]}
        </div>
        <div
          data-cellindex="6"
          className="cell"
          onClick={() => cell_clicked(6)}
        >
          {cells[6]}
        </div>
        <div
          data-cellindex="7"
          className="cell"
          onClick={() => cell_clicked(7)}
        >
          {cells[7]}
        </div>
        <div
          data-cellindex="8"
          className="cell"
          onClick={() => cell_clicked(8)}
        >
          {cells[8]}
        </div>
      </div>
      <h2 className="status-text">{status}</h2>
      <button className="restart-btn" onClick={() => restart_game()}>
        Restart
      </button>
    </div>
  );
}
export default TicTacToe;
