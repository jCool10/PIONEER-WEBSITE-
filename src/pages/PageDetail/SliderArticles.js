import React,{useRef} from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from './SliderArticles.module.css';

export default function SliderArticles(props) 
{
  const swiper = new Swiper('.swiper', {
  grid: {
    rows: 2,
  },
});
  return (
    <Swiper className='swiper'
      modules={[Navigation,Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      slidesPerColumn={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {
        props.articleContents.map((article) => 
        {
            return (
                <SwiperSlide key={article.id} className={styles.shortArticle} style={{display: 'flex',color: 'red'}}>
                    <img className={styles.shortArticleImg} src={article.imgArticle} alt='Article' />
                    <div className={styles.shortArticleInfo}>
                        <h1 className={styles.shortArticleTitle}>{article.title}</h1>
                        <p className={styles.shortArticleParagraph}>{article.paragraph}</p>
                    </div>
                </SwiperSlide>
            )
        })
      }
    </Swiper>


  )
    // const settings = {
    //   dots: true,
    //   infinite: false,
    //   slidesToShow: 5,
    //   slidesToScroll: 5, 
    //   vertical: true,
    //   verticalSwiping: true,
    //   swipeToSlide: true,
    //   arrow: true,
    // //   beforeChange: function(currentSlide, nextSlide) {
    // //     console.log("before change", currentSlide, nextSlide);
    // //   },
    // //   afterChange: function(currentSlide) {
    // //     console.log("after change", currentSlide);
    // //   }
    // };
    // return (
    //   <div>
        
    //     <Slider {...settings} className={styles.sliderArticle}>
    //       {
            
    //         props.articleContents.map((article) => 
    //         {
    //             return (
    //                 <div key={article.id} className={styles.shortArticle} style={{display: 'flex',color: 'red'}}>
    //                     <img className={styles.shortArticleImg} src={article.imgArticle} alt='Article' />
    //                     <div className={styles.shortArticleInfo}>
    //                         <h1 className={styles.shortArticleTitle}>{article.title}</h1>
    //                         <p className={styles.shortArticleParagraph}>{article.paragraph}</p>
    //                     </div>
    //                 </div>
    //             )
    //         })
    //       }
    //     </Slider>
    //   </div>
    // );
}