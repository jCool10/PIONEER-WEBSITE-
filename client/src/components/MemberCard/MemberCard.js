import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MemberDetailAction } from "../../redux/actions/action";
import "./MemberCard.scss";

export default function Card(props) {
  const { name, position, img, id } = props.member;

  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="content">
        <div className="img">
          <img src={img} alt="img" />
        </div>
        <div className="details">
          <div className="name">{name}</div>
          <div className="job">{position}</div>
        </div>

        <button
          className="detail"
          onClick={() => {
            navigate(`/members/${id}`);
          }}
        >
          Chi tiết
        </button>
      </div>
    </div>
  );
}
