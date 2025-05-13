import { Image } from "antd";
import profileImage from "../../assets/profile/profile.png";
import CustomSlider from "../common/CustomSlider";

const HomeProfileSlide = ({profileData,match}) => {
 

  return (
    <div className="max-w-[1400px] ">
      <CustomSlider match={match} className={"rounded-xl !h-[250px] !w-[250px]"} slides={profileData} centerMode SlideDataCount={4}  arrButton={false}/>
    </div>
  );
};

export default HomeProfileSlide;
