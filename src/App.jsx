import { useState } from "react";

import Home from "./Home";
import Weather from "./Weather";
import Clock from "./Clock";
import Stopwatch from "./Stopwatch";
import Timer from "./Timer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}

      {page === "weather" && <Weather setPage={setPage} />}

      {page === "clock" && <Clock setPage={setPage} />}

      {page === "stopwatch" && <Stopwatch setPage={setPage} />}

      {page === "timer" && <Timer setPage={setPage} />}
    </>
  );
}

export default App;