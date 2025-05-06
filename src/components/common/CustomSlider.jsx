import React from "react";
import Slider from "react-slick";
const CustoSlider = ({ data = [2, 3, 3, 4, 1] }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        {data.map((item) => {
          return <>{item}</>;
        })}
      </Slider>
    </div>
  );
};
export default CustoSlider;
