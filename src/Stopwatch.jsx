import { useEffect, useState } from "react";

const Stopwatch = ({ setPage }) => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => setPage("home")}>
         Back</button>

      <div className="glass-box">
        <h1><b>Stopwatch</b></h1>

        <h2 className="time">{seconds} sec</h2>

        <div>
          <button className="start-btn" onClick={() => setRunning(true)}>
            Start</button>

          <button className="stop-btn" onClick={() => setRunning(false)}>
            Stop</button>

          <button
            onClick={() => {
              setSeconds(0);
              setRunning(false);
            }}> 
            Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;