import React from "react";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChair,
  faUser,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import carousal1 from "../images/carousal1.jpg";
import carousal2 from "../images/carousal2.jpg";

const Home = () => {
  const CarouselData = [
    {
      id: 1,
      img: carousal1,
      date: "March 8, 2025",
      seats: "3000",
      speakers: "10",
      location: "MUMBAI, INDIA",
    },
    {
      id: 2,
      img: carousal2,
      date: "July 15, 2025",
      seats: "4000",
      speakers: "12",
      location: "TOKYO, JAPAN",
    },
  ];

  return (
    <div>
      <Carousel interval={2000} pause="hover" wrap indicators>
        {CarouselData.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="home">
              <img
                className="home-image"
                src={item.img}
                alt={`Event ${item.id}`}
              />
              <div className="home-info">
                <span className="home-event-date">{item.date}</span>
                <span className="home-event-name">Big Event</span>
                <span className="home-event-name">GWECCC 2025</span>
                <div className="home-event-allInfo">
                  <div className="home-event-info">
                    <FontAwesomeIcon
                      className="home-event-info-icon"
                      icon={faChair}
                    />
                    <span className="home-event-info-count">
                      {item.seats} SEATS
                    </span>
                  </div>
                  <div className="home-event-info">
                    <FontAwesomeIcon
                      className="home-event-info-icon"
                      icon={faUser}
                    />
                    <span className="home-event-info-count">
                      {item.speakers} SPEAKERS
                    </span>
                  </div>
                  <div className="home-event-info">
                    <FontAwesomeIcon
                      className="home-event-info-icon"
                      icon={faLocationDot}
                    />
                    <span className="home-event-info-count">
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="book-now-button">
                  <span>Book Now</span>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
