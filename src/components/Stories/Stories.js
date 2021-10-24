import Slider from "react-slick";
import StoriesItem from "../StoriesItem/StoriesItem";
import SlickArrow from "../../layout/SlickArrow/SlickArrow";
import "./Stories.css";

function Stories() {
  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <SlickArrow direction='left'/>,
    nextArrow: <SlickArrow  direction='right'/>,
  };
  return (
    <div className="stories">
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
