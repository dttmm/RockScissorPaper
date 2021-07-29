import { useState } from "react";
import Button from "./Button";
import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import Reset from "./Reset";
import { compareHand, generateRandomHand } from "./utils";
import "./App.css";

const INITIAL_VALUE = "rock";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };

  const handleBetChange = (e) => {
    // console.log(e.target.value)
    let num = Number(e.target.value);
    if (num > 9) {
      num %= 10;
    } else if (num < 1) {
      num = 1;
    }
    setBet(num);
  };

  return (
    <div class="App">
      <h1 class="App-heading">가위바위보</h1>
      <Reset className="App-reset" onClick={handleClearClick}></Reset>

      <div class="App-scores">
        <div class="Score">
          <div class="Score-num">{score}</div>
          <div class="Score-name">나</div>
        </div>
        <div class="App-versus">:</div>
        <div class="Score">
          <div class="Score-num">{otherScore}</div>
          <div class="Score-name">상대</div>
        </div>
      </div>

      <div class="Box App-box">
        <div class="Box-inner">
          <div class="App-hands">
            <div class="Hand">
              <HandIcon className="Hand-icon" value={hand} />
            </div>
            <div class="App-versus">VS</div>
            <div class="Hand">
              <HandIcon className="Hand-icon" value={otherHand} />
            </div>
          </div>
          <div class="App-bet">
            <span>배점</span>
            <input
              onChange={handleBetChange}
              type="number"
              value={bet}
              min={1}
              max={9}
            ></input>
            <span>배</span>
          </div>
          <div class="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>

      <div>
        <HandButton
          className="HandButton"
          value="rock"
          onClick={handleButtonClick}
        />
        <HandButton
          className="HandButton"
          value="scissor"
          onClick={handleButtonClick}
        />
        <HandButton
          className="HandButton"
          value="paper"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
}

export default App;
