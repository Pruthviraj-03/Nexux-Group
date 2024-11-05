import React from "react";
import speaker1 from "../images/speaker-1.jpg";
import speaker2 from "../images/speaker-2.jpg";
import speaker3 from "../images/speaker-3.jpg";
import speaker4 from "../images/speaker-4.jpg";
import speaker5 from "../images/speaker-5.jpg";
import speaker6 from "../images/speaker-6.jpg";
import speaker7 from "../images/speaker-7.jpg";
import speaker8 from "../images/speaker-8.jpg";

const Speakers = () => {
  const SpeakersData = [
    {
      id: 1,
      img: speaker1,
      name: "Dale Marke",
      role: "Event Manager",
    },
    {
      id: 2,
      img: speaker2,
      name: "Natisha Decoux",
      role: "Event Manager",
    },
    {
      id: 3,
      img: speaker3,
      name: "Adolfo Plahs",
      role: "Event Manager",
    },
    {
      id: 4,
      img: speaker4,
      name: "Mitchell Heggestad",
      role: "Event Manager",
    },
    {
      id: 5,
      img: speaker5,
      name: "Kenyetta Lesley",
      role: "Event Manager",
    },
    {
      id: 6,
      img: speaker6,
      name: "Shelly Verghese",
      role: "Event Manager",
    },
    {
      id: 7,
      img: speaker7,
      name: "Cassandra Kopka",
      role: "Event Manager",
    },
    {
      id: 8,
      img: speaker8,
      name: "Eugene Clumpner",
      role: "Event Manager",
    },
  ];

  return (
    <div className="speakers">
      <span>SPEAKERS</span>
      <h3>Todays Performers</h3>
      <div className="all-speakers">
        {SpeakersData.map((speaker, index) => (
          <div className="outer-speakers-circle" key={index}>
            <img src={speaker.img} alt={`speaker-${index + 1}`} />
            <span>{speaker.name}</span>
            <h3>{speaker.role}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
