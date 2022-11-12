import React from 'react';
import './EventCard.scss';

export default function EventCard() {
  // console.log()
  return (
    <div>
      <div className="eventCard">
        <div className="cardContainer">
          <div className="cardImg">
            <div className="cardOverlay" />
            <div className="cardTop">
              <a rel="noopener noreferrer" href="#">
                Politics
              </a>
              <div>
                <span className="day ">04</span>
                <span className="month">Aug</span>
              </div>
            </div>
            <h2>
              <a rel="noopener noreferrer" href="#">
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
