import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import Slider from 'react-slick';

import 'swiper/css';
import 'swiper/css/navigation';

import Card from '../Card/Card';

export default function SwiperCard(props) {
  const { slidesPerView, members } = props;

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <div className="">
      {/* <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={true}
        spaceBetween={0}
        slidesPerView={slidesPerView}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        className="h-[550px] mySwiper"
      >
        {members?.map((member) => (
          <SwiperSlide>
            <Card member={member} />
          </SwiperSlide>
        ))}
      </Swiper> */}

      <Slider {...settings}>
        {members?.map((member) => (
          <Card member={member} />
        ))}
      </Slider>
    </div>
  );
}
