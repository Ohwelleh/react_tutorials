import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState<string>("0");
  // Might want to use a Reducer or one of the hooks.
  function appendToDisplay(value: string) {
    setInput(value);
  }
  function calculate() {}
  function clearDisplay() {}

  return (
    <div className="calculator">
      <input className="display" readOnly value={input} />
      <div className="keys">
        <button className="operator-btn" onClick={() => appendToDisplay("+")}>
          +
        </button>
        <button onClick={() => appendToDisplay("7")}>7</button>
        <button onClick={() => appendToDisplay("8")}>8</button>
        <button onClick={() => appendToDisplay("9")}>9</button>
        <button className="operator-btn" onClick={() => appendToDisplay("-")}>
          -
        </button>
        <button onClick={() => appendToDisplay("4")}>4</button>
        <button onClick={() => appendToDisplay("5")}>5</button>
        <button onClick={() => appendToDisplay("6")}>6</button>
        <button className="operator-btn" onClick={() => appendToDisplay("*")}>
          *
        </button>
        <button onClick={() => appendToDisplay("1")}>1</button>
        <button onClick={() => appendToDisplay("2")}>2</button>
        <button onClick={() => appendToDisplay("3")}>3</button>
        <button className="operator-btn" onClick={() => appendToDisplay("/")}>
          /
        </button>
        <button onClick={() => appendToDisplay("0")}>0</button>
        <button onClick={() => appendToDisplay(".")}>.</button>
        <button onClick={calculate}>=</button>
        <button className="operator-btn" onClick={clearDisplay}>
          C
        </button>
      </div>
    </div>
  );
}

export default Calculator;
