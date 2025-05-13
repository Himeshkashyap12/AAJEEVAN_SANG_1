import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import CustomText from "./CustomText";
import user from "../../assets/message/user.jpg";
import verify from "./../../assets/icons/verify.png"
const CustomSlider = ({
  slides,
  SlideDataCount,
  className,
  centerMode = false,
  arrButton,
  dots = false,
  profileMessage = false,
  match
}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;

    return (
      <>
        <div
          className="absolute right-[50px] top-0 bottom-0 my-auto flex items-center cursor-pointer"
          onClick={onClick}
        >
          <RightCircleOutlined style={{ color: "#fff", fontSize: "24px" }} />
        </div>
      </>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="absolute left-[50px] top-0 bottom-0 my-auto flex items-center  z-10 cursor-pointer"
        onClick={onClick}
      >
        <LeftCircleOutlined style={{ color: "#fff", fontSize: "24px" }} />
      </div>
    );
  }
  const settings = {
    dots: dots,
    infinite: true,
    // fade:true,
    speed: 500,
    slidesToShow: SlideDataCount,
    slidesToScroll: 1,
    centerMode: centerMode,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:
            SlideDataCount - 1 != 0 ? SlideDataCount - 1 : SlideDataCount,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow:
            SlideDataCount - 1 != 0 ? SlideDataCount - 1 : SlideDataCount,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow:
            SlideDataCount - 1 != 0 ? SlideDataCount - 1 : SlideDataCount,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: arrButton && <SampleNextArrow />,
    prevArrow: arrButton && <SamplePrevArrow />,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          {!profileMessage && (
            <div className="relative">
              <Image
                preview={false}
                src={slide.img}
                alt={slide.alt}
                className={`${className}  object-cover`}
              />

              <div className="absolute bottom-5   text-2xl px-5 flex flex-col gap-[12px]">
                <div className="flex items-center gap-3">
                  <CustomText className={"!text-[#ffff] !text-[14px]  font-[600]"} text={"Klee Gracia, 24"}/>
                  <Image src={verify} preview={false} className="size-[20px] rounded-full "/>
                </div>
                <div className="flex items-center gap-3">
                 <CustomText className={"!text-[#fff] !text-[12px] font-[300] bg-[#20191366] px-2 py-1 rounded-full"} text={"Baharaman, Hindu  "}/>
                 <CustomText className={"!text-[#fff] !text-[12px] font-[300] bg-[#20191366] px-2 py-1 rounded-full"} text={"5'2''"}/>
             </div>
              </div>
             { match && <div className="absolute top-1 left-[3px]">
                <CustomText className={"bg-[#F81B3E] px-4 py-2 rounded-full !text-[#fff] !text-[12px] font-[400]"} text={"94% Match"}/>
              </div>}
            </div>
          )}
          {profileMessage && (
            <div className="relative flex flex-col justify-center items-center">
              <Image
                preview={false}
                className="rounded-full  object-cover !size-[80px]  border border-[#F81B3E]"
                src={user}
              />
              <CustomText
                className={"!text-[14px] font-[300]"}
                text={"Hasley"}
              />
              <div className="size-[16px] bg-[#00EAA5] rounded-full absolute bottom-6  right-1"></div>
            </div>
          )}
        </div>
      ))}
    </Slider>
  );
};

export default CustomSlider;
