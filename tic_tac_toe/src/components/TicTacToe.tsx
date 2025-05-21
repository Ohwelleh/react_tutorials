function TicTacToe() {
  return (
    <div className="game-container">
      <h1>Tic Tac Toe</h1>
      <div className="cell-container">
        <div data-cellIndex="0" className="cell"></div>
        <div data-cellIndex="1" className="cell"></div>
        <div data-cellIndex="2" className="cell"></div>
        <div data-cellIndex="3" className="cell"></div>
        <div data-cellIndex="4" className="cell"></div>
        <div data-cellIndex="5" className="cell"></div>
        <div data-cellIndex="6" className="cell"></div>
        <div data-cellIndex="7" className="cell"></div>
        <div data-cellIndex="8" className="cell"></div>
      </div>
      <h2 className="status-text"></h2>
      <button className="restart-btn">Restart</button>
    </div>
  );
}
export default TicTacToe;
