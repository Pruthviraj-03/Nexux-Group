import React, { useState, useEffect } from "react";

const Timer = () => {
  const initialTime = 2 * 24 * 60 * 60 + 12 * 60 * 60 + 21 * 60 + 50;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      <div className="count">
        <span className="number">{String(days).padStart(2, "0")}</span>
        <span className="text">Days</span>
      </div>
      <span className="dot-icon">:</span>
      <div className="count">
        <span className="number">{String(hours).padStart(2, "0")}</span>
        <span className="text">Hours</span>
      </div>
      <span className="dot-icon">:</span>
      <div className="count">
        <span className="number">{String(minutes).padStart(2, "0")}</span>
        <span className="text">Minutes</span>
      </div>
      <span className="dot-icon">:</span>
      <div className="count">
        <span className="number">{String(seconds).padStart(2, "0")}</span>
        <span className="text">Seconds</span>
      </div>
    </div>
  );
};

export default Timer;
