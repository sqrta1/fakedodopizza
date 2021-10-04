import './Stories.css';

import StoriesItem from '../StoriesItem/StoriesItem';

import Slider from 'react-slick';

function SampleNextArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

function Stories() {
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
        <StoriesItem />
      </Slider>
    </div>
  );
}

export default Stories;
