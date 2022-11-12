import React from 'react';
import EventCard from '../../components/EventCard/EventCard';
import ExperienceCard from '../../components/ExperienceCard/ExperienceCard';
import SliderEvent from '../../components/SliderEvent/SliderEvent';
import mainImg from '../../assets/main2.png';

import './Event.scss';
import { useSelector } from 'react-redux';

export default function Events() {
  const { eventData, experienceData } = useSelector((state) => state.EventReducer);
  return (
    <section>
      <div className="main grid grid-cols-10">
        <div className="main_content col-span-7">
          <h1>Title Event</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique pariatur facere quaerat rerum nihil
            architecto voluptas possimus laboriosam tempora assumenda fuga velit, asperiores ab dolore ipsam blanditiis
            culpa. In, ea!
          </p>
          <button>Tìm hiểu thêm</button>
        </div>
        <div className="main_img col-span-3">
          <img src={mainImg} alt="" />
        </div>
      </div>
      <div className="services">
        <h5>Sự kiện mới nhất</h5>
        {/* <h2>Thông tin sự kiện Câu lạc bộ sinh viên nghiên cứu khoa học Pioneer</h2> */}
        <SliderEvent rows={2} card={EventCard} data={eventData} />
      </div>
      <div className="experience">
        <h5>Kinh nghiệm</h5>
        <SliderEvent rows={1} card={ExperienceCard} data={experienceData} />
      </div>
    </section>
  );
}
