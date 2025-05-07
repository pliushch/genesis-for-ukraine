import React, { useState } from 'react';
import { ReactComponent as PixelAbsolute } from 'src/assets/images/gathering/slider/pixel.svg';
import Carousel from 'src/components/GatheringCarousel';
import './Slider.scss';

import Sidebar from './Sidebar';
import { sliderImg, sliderData } from './const';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="sliderSection">
      <PixelAbsolute className="pixel" />
      <h2>Техніка, яку отримала аеророзвідка ТРО ЗСУ</h2>

      <div className="sliderContainer">
        <Carousel slides={sliderImg} setActiveSlide={setActiveIndex} />

        <div className="sliderSidebar">
          <Sidebar key={sliderImg[activeIndex].alt} description={sliderData[activeIndex]} />
          <div className="background-block"></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
