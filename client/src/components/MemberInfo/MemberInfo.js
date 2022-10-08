import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import './MemberInfo.scss';

export default function MemberInfo(props) {
  const { memberDetail } = useSelector((state) => state.MemberReducer);

  const {
    name,
    position,
    describe,
    img,
    contact: { facebook, gmail, github, linkedin },
  } = memberDetail[0];

  const navigate = useNavigate();

  return (
    <section>
      <div className="user_profile">
        <div className="user_option">
          <div className="user_avatar">
            <img src={img} alt="" />
          </div>
          <h4>{name}</h4>
          <h5>{position}</h5>
          <div className="separador"></div>
          <div className="user_contact">
            <a href={`${facebook}`} target="_blank" rel="noreferrer">
              <i class="fab fa-facebook" style={{ color: '#0090E1' }}></i>
            </a>

            <a href={`mailto:${gmail}`}>
              <i class="fa fa-envelope" style={{ color: '#EE0000' }}></i>
            </a>
            <a href={`${linkedin}`} target="_blank" rel="noreferrer">
              <i class="fab fa-linkedin-in" style={{ color: '#0090E1' }}></i>
            </a>
            <a href={`${github}`} target="_blank" rel="noreferrer">
              <i class="fab fa-github" style={{ color: '#000000' }}></i>
            </a>
          </div>
        </div>
        <div className="profile_info">
          <button
            className="cancel"
            onClick={() => {
              navigate('/members');
            }}
          >
            X
          </button>
          <h1>{name}</h1>
          <h2>{position}</h2>
          <div className="separador"></div>

          <div className="grid grid-cols-7 strength">
            <h4 className="col-span-2">Thế mạnh bản thân: </h4>
            <div className="col-span-5 strength_detail">
              <span>AI</span>
              <span>IOT</span>
              <span>WEB</span>
              <span>APP</span>
            </div>

            <h4 className="col-span-2">Giới thiệu bản thân: </h4>
            <p className="col-span-5">{describe}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
