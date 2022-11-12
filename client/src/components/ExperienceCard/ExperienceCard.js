import React from 'react';
import './ExperienceCard.scss';

export default function ExperienceCard(props) {
  console.log(props.item);
  const { name, position, img, content } = props.item;
  return (
    <div className="ExperienceCard">
      <p>{content}</p>
      <div className="author">
        <div className="authorImg">
          <img src={`${img}`} alt="" />
        </div>
        <div className="authorInfo">
          <h4>{name}</h4>
          <h3>{position}</h3>
        </div>
      </div>
    </div>
  );
}
