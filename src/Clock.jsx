import { useEffect, useState } from "react";

const Clock = ({ setPage }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page-container">
      <button className="back-btn" onClick={() => setPage("home")}>
       Back</button>

      <div className="glass-box">
        <h1><b>Digital Clock</b></h1>

        <h2 className="time">
          {time.toLocaleTimeString()}
        </h2>

        <p>{time.toDateString()}</p>
      </div>
    </div>
  );
};

export default Clock;