import SpeicalOfferItem from "../SpecialOfferItem/SpecialOfferItem";
import Slider from "react-slick";
import "./SpecialOffers.css";
import { Container, Row, Col } from "reactstrap";

function SpecialOffer() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="specialoffer">
      <Container>
        <h2 className="specialoffer-text">Вам понравится</h2>
      </Container>
      <Container fluid={true}>
        <Container className="specialoffer-col">
          <div className="specialoffer-col-fade specialoffer-col__left" />
          <Slider className="specialoffer_slider" {...settings}>
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
          <div className="specialoffer-col-fade specialoffer-col__right" />
        </Container>
      </Container>
    </div>
  );
}

export default SpecialOffer;
