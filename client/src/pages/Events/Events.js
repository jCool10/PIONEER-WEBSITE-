import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SliderEvent from '../../components/SliderEvent/SliderEvent';
import mainImg from '../../assets/pioneer_entry_challenge.jpg';

import './Event.scss';
import { useSelector } from 'react-redux';

export default function Events() {
  const { eventData, experienceData } = useSelector((state) => state.EventReducer);
  return (
    <section>
      <div className="grid grid-cols-10 main">
        <div className="col-span-6 main_content">
          <h1>CUỘC THI PIONEER ENTRY CHALLENGE 2022</h1>
          <p>
            Nhằm xua tan đi tiết trời se lạnh, thất thường của những ngày đầu tháng 11, PIONEER sẽ bật mí một chút thông tin sốt dẻo “vừa thổi vừa đọc” cho các bạn đây !!!
          </p>
          <button>Tìm hiểu thêm</button>
        </div>
        <div className="col-span-4 main_img">
          <img src={mainImg} alt="" />
        </div>
      </div>
      <div className="services">
        <h5 className='services_title'>Sự kiện mới nhất</h5>
        <SliderEvent rows={2} card={EventCard} data={eventData} />
      </div>
      <div className="experience">
        <h5>Kinh nghiệm</h5>
        <SliderEvent rows={1} card={ExperienceCard} data={experienceData} />
      </div>
    </section>
  );
}
