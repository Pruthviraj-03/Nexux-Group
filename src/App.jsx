import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Timer from "./components/Timer";
import About from "./components/About";
import Features from "./components/Features";
import Speakers from "./components/Speakers";
import Ticket from "./components/Ticket";
import Register from "./components/Register";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const aboutRef = useRef(null);
  const speakersRef = useRef(null);
  const ticketsRef = useRef(null);
  const registerRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "speakers":
        speakersRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "tickets":
        ticketsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "register":
        registerRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Header scrollToSection={scrollToSection} />
      <Home />
      <Timer />
      <div ref={aboutRef}>
        <About />
      </div>
      <Features />
      <div ref={speakersRef}>
        <Speakers />
      </div>
      <div ref={ticketsRef}>
        <Ticket />
      </div>
      <div ref={registerRef}>
        <Register />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
