import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Ticket = () => {
  return (
    <div className="ticket">
      <span className="ticket-title1">GET TICKET</span>
      <h3 className="ticket-title2">Choose a Ticket</h3>

      <div className="ticket-cards">
        <div className="ticket-card1">
          <div className="ticket-card1-upper">
            <div className="outer-ticket-circle">
              <FontAwesomeIcon
                className="paper-plane-icon-card1"
                icon={faPaperPlane}
              />
            </div>
          </div>
          <div className="card-middle">
            <span className="ticket-day">Day Pass</span>
            <h3 className="ticket-price-card1">$35.99</h3>
            <div className="ticket-features">
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Conference Tickets</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Free Lunch And Coffee</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Certificate</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Easy Access</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Free Contacts</span>
              </div>
            </div>
            <div className="buy-now-button-card1">
              <span>BUY Ticket</span>
            </div>
          </div>
          <div className="card1-lower"></div>
        </div>

        <div className="ticket-card2">
          <div className="ticket-card2-upper">
            <div className="outer-ticket-circle">
              <FontAwesomeIcon
                className="paper-plane-icon-card2"
                icon={faPaperPlane}
              />
            </div>
          </div>
          <div className="card-middle">
            <span className="ticket-day">Day Pass</span>
            <h3 className="ticket-price-card2">$35.99</h3>
            <div className="ticket-features">
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Conference Tickets</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Free Lunch And Coffee</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Certificate</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Easy Access</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Free Contacts</span>
              </div>
            </div>
            <div className="buy-now-button-card2">
              <span>BUY Ticket</span>
            </div>
          </div>
          <div className="card2-lower"></div>
        </div>

        <div className="ticket-card3">
          <div className="ticket-card3-upper">
            <div className="outer-ticket-circle">
              <FontAwesomeIcon
                className="paper-plane-icon-card3"
                icon={faPaperPlane}
              />
            </div>
          </div>
          <div className="card-middle">
            <span className="ticket-day">Day Pass</span>
            <h3 className="ticket-price-card3">$35.99</h3>
            <div className="ticket-features">
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Conference Tickets</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Free Lunch And Coffee</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-check-icon" icon={faCheck} />
                <span>Certificate</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Easy Access</span>
              </div>
              <div className="dotted-line"></div>
              <div className="ticket-feature">
                <FontAwesomeIcon className="ticket-xmark-icon" icon={faXmark} />
                <span>Free Contacts</span>
              </div>
            </div>
            <div className="buy-now-button-card3">
              <span>BUY Ticket</span>
            </div>
          </div>
          <div className="card3-lower"></div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
