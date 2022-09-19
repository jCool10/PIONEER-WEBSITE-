import React from 'react';
import OutTeam1 from '../../assets/OUT_TEAMS_1.png';
import './Members.scss';
import SwiperCard from '../../components/Swiper/SwiperCard';

import { members } from '../../data';

const renderMembers = () => {
  return members.map((member, index) => {
    return <SwiperCard key={index} member={member} />;
  });
};

function Members() {
  return (
    <section>
      <div className="introduce">
        <img src={OutTeam1} alt="" className="w-full h-full" />
      </div>

      <div>{renderMembers()}</div>
    </section>
  );
}

export default Members;
