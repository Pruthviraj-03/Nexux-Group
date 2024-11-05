import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Home from "./components/Home";
import Timer from "./components/Timer";
import About from "./components/About";
import Features from "./components/Features";
import Speakers from "./components/Speakers";

const App = () => {
  return (
    <div>
      <Home />
      <Timer />
      <About />
      <Features />
      <Speakers />
    </div>
  );
};

export default App;
