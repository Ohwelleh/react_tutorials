import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState<Date>(new Date());

  // On mount only, create an interval that updates every second.
  useEffect(() => {
    // Interval that updates every second.
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // On unmount, clear the interval.
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  function formatTime(): string {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    // Converting from Military time. 13 % 12 = 1.
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  }

  function padZero(number: number): string {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
