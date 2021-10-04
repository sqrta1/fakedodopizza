import SpeicalOfferItem from '../SpecialOfferItem/SpecialOfferItem';

import Slider from 'react-slick';

import './SpecialOffers.css';

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

function SpecialOffer() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="specialoffer">
      <h2 className="specialoffer-text">Вам понравится</h2>
      <Slider {...settings}>
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
        <SpeicalOfferItem />
      </Slider>
    </div>
  );
}

export default SpecialOffer;
