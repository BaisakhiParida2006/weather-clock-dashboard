import { useEffect, useState } from "react";

const Timer = ({ setPage }) => {
  const [input, setInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setRunning(false);
    }

    return () => clearInterval(timer);
  }, [running, timeLeft]);

  const startTimer = () => {
    const seconds = Number(input);
    if (seconds <= 0 || isNaN(seconds)) {
      alert("Please enter a positive number");
      return;
    }

    setTimeLeft(seconds);
    setRunning(true);
  };

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => setPage("home")}>
        Back </button>

      <div className="glass-box">
        <h1>Countdown</h1>

        <input
          type="number"
          placeholder="Enter seconds"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <h2 className="time">
          {timeLeft} sec
        </h2>

        <button className="start-btn" onClick={startTimer}>
          Start</button>

        <button
          onClick={() => {
            setInput("");
            setTimeLeft(0);
            setRunning(false);
          }}>
          Reset</button>
      </div>
    </div>
  );
};

export default Timer;