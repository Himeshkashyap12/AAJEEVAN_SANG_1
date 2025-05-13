import { Col, Image, Row } from "antd";
import profileImage from "../../assets/profile/profile.jpg";
import CustomText from "../common/CustomText";
import { Link } from "react-router-dom";
import CustoSlider from "../common/CustomSlider";
import HomeProfileSlide from "./HomeProfileSlides";
import CustomSlider from "../common/CustomSlider";
const HomeProfile = ({ heading, to,match=false }) => {
  const profileData = [
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
    { img: profileImage },
  ];
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center pb-[16px]">
          <CustomText className={"!text-[24px] font-[400]"} text={heading} />
          <Link className={"!text-[14px] font-[300] !text-secondary"} to={to}>
            View All
          </Link>
        </div>
        
      </div>
     <HomeProfileSlide profileData={profileData} match={match} />
    </>
  );
};
export default HomeProfile;
