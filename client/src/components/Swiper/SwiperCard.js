import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation, Scrollbar, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Card from '../Card/Card';

export default function SwiperCard(props) {
  const {
    member: { slidesPerView, autoplay, content, title },
  } = props;

  const renderSwiperSlide = () => {
    return content.map((member, index) => {
      return (
        <SwiperSlide>
          <Card member={member} />
        </SwiperSlide>
      );
    });
  };

  return (
    <div className="h-[600px]">
      <h2 className=" h1Title mt-11">{title}</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={autoplay}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="h-[500px] mySwiper"
      >
        {renderSwiperSlide()}
      </Swiper>
    </div>
  );
}
