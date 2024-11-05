import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Home from "./components/Home";
import Timer from "./components/Timer";

const App = () => {
  return (
    <div>
      <Home />
      <Timer />
    </div>
  );
};

export default App;
