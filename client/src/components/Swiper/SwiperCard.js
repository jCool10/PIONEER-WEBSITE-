import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

import Card from '../Card/Card';

export default function SwiperCard(props) {
  const { slidesPerView, members } = props;

  return (
    <div className="h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="h-[500px] mySwiper"
      >
        {members?.map((member) => (
          <SwiperSlide>
            <Card member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
