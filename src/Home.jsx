const Home = ({ setPage }) => {
  return (
    <div className="home-container">
      <h1 className="main-title"> Hello!!</h1>

      <p className="subtitle">
        Welcome to Weather & Clock Dashboard</p>

      <div className="cards">
        <div className="card" onClick={() => setPage("weather")}>
          <h2>Weather</h2>
          <p>Check live weather updates</p>
        </div>

        <div className="card" onClick={() => setPage("clock")}>
          <h2>Digital Clock</h2>
          <p>View current live time</p>
        </div>

        <div className="card" onClick={() => setPage("stopwatch")}>
          <h2>Stopwatch</h2>
          <p>Track your timing</p>
        </div>

        <div className="card" onClick={() => setPage("timer")}>
          <h2>Timer</h2>
          <p>Start countdown timer</p>
        </div>
      </div>
    </div>
  );
};

export default Home;