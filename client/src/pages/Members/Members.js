import React from 'react';
import './Members.scss';
import SwiperCard from '../../components/Swiper/SwiperCard';
import { useSelector } from 'react-redux';

function Members() {
  const { listMember } = useSelector((state) => state.MemberReducer);

  return (
    <section>
      <div className="introduce"></div>

      <h1 className="h1Title">BAN CHỈ NHIỆM CÂU LẠC BỘ</h1>
      <SwiperCard members={listMember.filter((member) => member.role === 'memberLead')} slidesPerView={3} />

      <h1 className="h1Title">LEADER CÁC TEAM</h1>
      <SwiperCard members={listMember.filter((member) => member.role === 'teamLeader')} slidesPerView={3} />

      <h1 className="h1Title">THÀNH VIÊN</h1>
      <SwiperCard members={listMember.filter((member) => member.role === 'member')} slidesPerView={5} />
    </section>
  );
}

export default Members;
