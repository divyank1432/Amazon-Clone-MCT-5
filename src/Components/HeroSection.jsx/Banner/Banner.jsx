// import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import Banner1 from './../../../assets/images/Banners/bannerImgOne.jpg';
import Banner2 from './../../../assets/images/Banners/bannerImgTwo.jpg';
import Banner3 from './../../../assets/images/Banners/bannerImgThree.jpg';
import Banner4 from './../../../assets/images/Banners/bannerImgFour.jpg';
import Banner5 from './../../../assets/images/Banners/bannerImgFive.jpg';
import { NextArrow, PrevArrow } from './CustomArrows';

const Banner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="banner relative">
      <Slider {...settings}>
        <div>
          <img src={Banner1} alt="Banner 1" className="w-full h-80 md:h-[500px] object-cover" />
        </div>
        <div>
          <img src={Banner2} alt="Banner 2" className="w-full h-80 md:h-[500px] object-cover" />
        </div>
        <div>
          <img src={Banner3} alt="Banner 3" className="w-full h-80 md:h-[500px] object-cover" />
        </div>
        <div>
          <img src={Banner4} alt="Banner 4" className="w-full h-80 md:h-[500px] object-cover" />
        </div>
        <div>
          <img src={Banner5} alt="Banner 5" className="w-full h-80 md:h-[500px] object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
