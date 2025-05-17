import { useState, useEffect, useRef } from "react";
function Stopwatch() {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [elapsedTime, setElapsedTime] = useState<number>(0);
  const intervalIdRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number>(0);

  // This useEffect runs when the component is mounted or whenever isRunning changes.
  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000) / 10);

    // Adding padding zeros to the numbers.
    let hour = String(hours).padStart(2, "0");
    let min = String(minutes).padStart(2, "0");
    let sec = String(seconds).padStart(2, "0");
    let mili = String(miliseconds).padStart(2, "0");

    return `${hour}:${min}:${sec}:${mili}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-btn" onClick={start}>
          Start
        </button>
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
