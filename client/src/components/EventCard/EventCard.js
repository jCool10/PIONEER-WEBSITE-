import React from "react";
import { useNavigate } from "react-router-dom";
import "./EventCard.scss";

export default function EventCard(props) {
  const { id, title, img } = props.item;
  const navigate = useNavigate();

  return (
    <div className="eventCard">
      <button
        className="cardContainer"
        onClick={() => {
          navigate(`/events/${id}`);
        }}
      >
        <div className="cardImg" style={{ backgroundImage: `url(${img})` }}>
          <div className="cardOverlay" />
          <h2>{title}</h2>
        </div>
      </button>
    </div>
  );
}
