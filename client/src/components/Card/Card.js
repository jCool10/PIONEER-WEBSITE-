import React from 'react';
import './Card.scss';

export default function Card(props) {
  const { name, position, img } = props.member;

  return (
    <div className="card">
      <div className="content">
        <div className="img">
          <img src="https://picsum.photos/200/300" alt="img" />
        </div>
        <div className="details">
          <div className="name">{name}</div>
          <div className="job">{position}</div>
        </div>
        <div className="media-icons">
          <a href="#">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#">
            <i class="fa fa-envelope"></i>
          </a>
        </div>
        <button className="detail">Chi tiết</button>
      </div>
    </div>
  );
}
