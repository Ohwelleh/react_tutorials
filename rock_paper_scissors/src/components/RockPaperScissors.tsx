import { useState } from "react";

function RockPapperScissors() {
  const ROCKPAPERSCISORSARRAY = ["rock", "paper", "scissors"];
  const [result, setResult] = useState<string>("");
  const [playerPicked, setPlayerChoice] = useState<string>("");
  const [computerPicked, setComputerChoice] = useState<string>("");
  const [computerScore, setComputerScore] = useState<number>(0);
  const [playerScore, setPlayerScore] = useState<number>(0);

  function playerWin() {
    setPlayerScore(playerScore + 1);
    return "YOU WIN";
  }

  function computerWin() {
    setComputerScore(computerScore + 1);
    return "YOU LOSE";
  }

  function playGame(playerChoice: string) {
    const computerChoice = ROCKPAPERSCISORSARRAY[Math.floor(Math.random() * 3)];
    setComputerChoice(computerChoice);
    setPlayerChoice(playerChoice);

    if (playerChoice === computerChoice) {
      setResult("IT'S A TIE");
    } else {
      switch (playerChoice) {
        case "rock":
          setResult(
            computerChoice === "scissors" ? playerWin() : computerWin()
          );
          break;
        case "paper":
          setResult(computerChoice === "rock" ? playerWin() : computerWin());
          break;
        case "scissors":
          setResult(computerChoice === "paper" ? playerWin() : computerWin());
          break;
        default:
          setResult("ERROR");
          break;
      }
    }
  }

  function resultRender() {
    switch (result) {
      case "YOU WIN":
        return <div className="result-display green-text">{result}</div>;
      case "YOU LOSE":
        return <div className="result-display red-text">{result}</div>;
      default:
        return <div className="result-display">{result}</div>;
    }
  }
  return (
    <>
      <div className="choices">
        <button onClick={() => playGame("rock")}>👊</button>
        <button onClick={() => playGame("paper")}>🤚</button>
        <button onClick={() => playGame("scissors")}>✌️</button>
      </div>

      <div className="player-display">PLAYER: {playerPicked}</div>
      <div className="computer-display">COMPUTER: {computerPicked}</div>
      {resultRender()}

      <div className="score-display">
        Player Score: <span className="player-score">{playerScore}</span>
      </div>

      <div className="score-display">
        Computer Score: <span className="computer-score">{computerScore}</span>
      </div>
    </>
  );
}
export default RockPapperScissors;
