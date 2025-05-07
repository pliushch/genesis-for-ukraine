import React from 'react';
import cn from 'classnames';
import Slider, { CustomArrowProps } from 'react-slick';
import { ReactComponent as Arrow } from 'src/assets/images/gathering/slider/leftArrow.svg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './GatheringCarousel.scss';

type GatheringCarouselProps = {
  setActiveSlide: (slide: number) => void;
  slides: Array<{ url: string; alt: string }>;
};

const GatheringCarousel = ({ slides, setActiveSlide }: GatheringCarouselProps) => {
  const settings = {
    centerMode: true,
    infinite: true,
    variableWidth: true,
    addaptiveHeight: true,
    swipe: false,
    initialSlide: 0,
    speed: 200,
    dots: true,
    prevArrow: <GatheringCarouselPrevButton />,
    nextArrow: <GatheringCarouselNextButton />,
    afterChange: (current: number) => {
      setActiveSlide(current);
    },
    customPaging: function () {
      return (
        <div className="paginationBulletWrapper">
          <div className="paginationBullet" />
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 991,
        settings: {},
      },
    ],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <img src={slide.url} alt={slide.alt} key={index} />
        ))}
      </Slider>
    </div>
  );
};

type GatheringCarouselButtonProps = CustomArrowProps;

const GatheringCarouselPrevButton = ({
  className,
  ...otherProps
}: GatheringCarouselButtonProps) => {
  return <Arrow className={cn(className, 'arrowPrev')} {...otherProps} />;
};

const GatheringCarouselNextButton = ({
  className,
  ...otherProps
}: GatheringCarouselButtonProps) => {
  return <Arrow className={cn(className, 'arrowNext')} {...otherProps} />;
};

export default GatheringCarousel;
