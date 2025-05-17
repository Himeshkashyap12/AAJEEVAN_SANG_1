import { Avatar, Col, Image, Row } from "antd";
import backgroundImageUrl from "../../assets/plan/plan.jpg";
import CustomText from "../common/CustomText";
import { CheckOutlined } from "@ant-design/icons";
import CustomButtonTwo from "../common/CustomButtonTwo";
import Slider from "react-slick";
import "./plan.css"
const Plan = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const planData = [
    {
      planName: "Basic Plan(Free)",
      subtitle: "Best for Browsing",
      feature: [
        "Create Profile & Browse Matches",
        "Send 5 Interest Requests per Week",
        "Cannot View Contact Details",
        "Limited Search Access",
        "Green Tick After KYC",
      ],
      greenTick: "Green Tick After KYC",
    },
    {
      planName: "Silver Plan",
      subtitle: "Perfect for Starters",
      affordable: "(Most Affordable Paid Plan)",
      feature: [
        "All Basic Features +",
        " Unlock 5 Contact Details per Week",
        "Send 10 Messages per Month",
        "Ad-Free Experience",
        "Basic Horoscope Matching",
        "Priority Email Support",
        "Green Tick After KYC",
      ],
      greenTick: "Green Tick After KYC",
    },
    {
      planName: "Gold Plan",
      subtitle: "Recommended Plan",
      affordable: "Best for Finding Matches Faster",
      feature: [
        " All Silver Features +",
        "Unlock 10 Contact Details per Week",
        "Send 30 Messages per Month",
        "Profile Boost for Higher Visibility (More Profile Views)",
        "Advanced Search Filters (Profession, Income, Education, etc.)",
        "Horoscope Compatibility Report",
        "WhatsApp Support for Queries",
        "Green Tick After KYC",
      ],
      greenTick: "Green Tick After KYC",
    },
    {
      planName: "Platinum Plan",
      subtitle: " Premium Matchmaking Features",
      affordable: "Best for Serious  Matchmakers",
      feature: [
        "All Gold Features +",
        "Unlock Unlimited Contact Details",
        "Send Unlimited Messages",
        "Featured Profile Placement (Top Search Results)",
        "Personalized Match Recommendations",
        "Exclusive Matchmaking Insights (who viewed your profile, best time to message, etc.)",
        "Dedicated Relationship Advisor for Guidance",
        "Green Tick After KYC",
        "VIP Badge Special Status)"
      ],
      greenTick: "Green Tick After KYC",
    },
    {
      planName: "Diamond VIP Plan",
      subtitle: "The Ultimate Matchmaking Experience",
      affordable: "Most Exclusive & Powerful Plan",
      feature: [
        " All Platinum Features +",
        "Featured Profile Placement (Expert Help to Find the Right Match)",
        "Guaranteed Matchmaking Assistance (We help connect you with verified, serious profiles)",
        "Personalized Profile Writing Assistance (Make your profile stand out)",
        "Exclusive Invitations to Offline/Online Meetups & Matrimonial Events (Expert Help to Find the Right Match)",
        "Premium Privacy Settings (Hide Profile from Non-Serious Users",
        "Premium Privacy Settings (Hide Profile from Non-Serious Users)",
        "VIP Tick (Highest Priority & Trust Status)"
      ],
      greenTick: "Green Tick After KYC",
    },
  ];

  function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: ",block", background: "#F81B3E",borderRadius:"50%" ,color:"#fff" ,height:"30px",width:"30px", display:"flex",justifyContent:"center",alignItems:"center" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#F81B3E",borderRadius:"50%" ,color:"#fff" ,height:"30px",width:"30px" ,display:"flex",justifyContent:"center",alignItems:"center"}}
      onClick={onClick}
    />
  );
}
  return (
    <>
      <div
        className="h-[100vh] "
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[70%] mx-auto !py-[50px]">
          <div className="flex flex-col w-[73%] ">
            <CustomText
              className={"!text-[50px] !font-[400]"}
              text={"Plans & Pricing"}
            />
            <CustomText
              className={"!text-[18px] !font-[400] !text-[#848199]"}
              text={
                "Explore our flexible pricing plans designed to suit every budget on your journey to find love. Choose from basic to premium options, each offering unique features to enhance your matchmaking experience."
              }
            />
          </div>
          <div className="slider-container bg-[#FFFFFF80] backdrop-blur-sm max-h-[700px]  w-[1400px] rounded-xl p-[20px] mt-[100px]">
            <Slider {...settings}>
              {planData?.map((item, idx) => {
                return (
                  <div key={idx} className="group hover:bg-[#F81B3E] min-h-[550px]  hover:p-5  hover:rounded-xl  shadow-2xl px-5 py-5 mx-2 ">
                    <div  className="flex items-baseline gap-1">
                      <div className="plan">
                      <CustomText
                        className={"group-hover:!text-white group-hover:!text-[40px] plan-heading !text-[30px]  font-[700] !text-[#231D4F] "}
                        text={item?.planName}
                      />
                      </div>
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <CustomText
                        className={" group-hover:!text-white !text-[18px] font-[600] !text-[#444444]"}
                        text={item?.subtitle}
                      />
                    {/* <div className="flex flex-col gap-[18px]"> */}
                      <CustomText
                        className={"group-hover:!text-white !text-[16px] font-[500] !text-secondary"}
                        text={item?.affordable}
                      />
                    </div>
                    <div className="flex flex-col gap-[18px] pt-[24px] h-[300px] overflow-auto">
                      {item?.feature?.map((item, idx) => {
                        return (
                          <div className="flex items-center gap-[16px] ">
                            <CheckOutlined
                              className="!rounded-full size-[16px] flex justify-center items-center p-1"
                              style={{
                                fontSize: "12px",
                                background: "#05CC30",
                                color: "#fff",
                                fontWeight: "bold",
                              }}
                            />
                            <CustomText
                              className={
                                "group-hover:!text-white !text-[18px] font-[400] !text-secondary "
                              }
                              text={item}
                            />
                          </div>
                        );
                      })}

                     
                    </div>
                     <div className=" flex justify-center w-[70%] pt-[20px]">
                        <CustomButtonTwo
                          className={
                            "!text-[16px] !border-none  w-[226px] font-[500] !bg-[#231D4F] !text-[#fff]"
                          }
                          value={"Choose plan"}
                        />
                      </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
export default Plan;
