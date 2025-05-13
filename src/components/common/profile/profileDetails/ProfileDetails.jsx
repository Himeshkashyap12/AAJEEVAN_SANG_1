import { Avatar, Col, Image, Row } from "antd";
import CustomText from "../../CustomText";
import Brief from "./Brief";
import About from "./About";
import Personal from "./Personal";
import Social from "./Social";
import Proffessional from "./Professional";
import LifeStyle from "./LifeStyle";
import CustomSlider from "../../CustomSlider";
import profileImage from "../../../../assets/profileDetails.jpg";
import arrowleft from "../../../../assets/icons/arrowleft.png";
import ProfileConnectionButton from "../ProfileConnectionButtons";
import topButtonLeft from "../../../../assets/profile/topbuttonleftBackground.png"
import topButtonRight from "../../../../assets/profile/topbuttonrightBackground.png"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./profile.css";
const ProfileDetails = () => {
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
      <Row className="pt-[24px] ">
        <Col span={24}>
          <div className="relative">
            <div className="pb-[40px] ps-2 cursor-pointer">
              <Avatar src={arrowleft} className="!size-[40px]" />
            </div>
            <div className="max-w-[1400px] rounded-xl pe-[50px]  profile-details">
              <CustomSlider
                slides={profileData}
                SlideDataCount={1}
                className={"!h-[460px] !w-[1220px] !!rounded-none"}
                arrButton={true}
                centerMode={true}
              />
            </div>
            <div className="absolute bottom-[75px] left-0 right-0 flex justify-center">
              <ProfileConnectionButton />
            </div>
            <div className="absolute left-0 top-[96px] cursor-pointer ">
              <div className="relative"> 
                <Image preview={false} src={topButtonLeft} className="!h-[40px] !w-[164px]"/>
                <div  className="absolute top-0  left-[16px] flex !items-center h-[40px] gap-[10px]">
                <LeftCircleOutlined style={{color:"#fff",fontSize:"24px"}}/>
                <CustomText className={"!text-[14px] font-[500] !text-[#fff]"} text={"Previous Profile"}/>
                </div>
              </div>
            </div>
            <div className="absolute right-[50px] top-[96px] cursor-pointer ">
              <div className="relative"> 
                <Image preview={false} src={topButtonRight} className="!h-[40px] !w-[164px]"/>
                <div  className="absolute top-0  left-[16px] flex !items-center h-[40px] gap-[10px]">
                <RightCircleOutlined style={{color:"#fff",fontSize:"24px"}}/>

                <CustomText className={"!text-[14px] font-[500] !text-[#fff]"} text={"Next Profile"}/>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[24px] h-[90vh] overflow-auto shadow-2xl px-5 py-[40px] me-[50px]   ">
            <Brief />
            <About />
            <Personal />
            <Social />
            <Proffessional />
            <LifeStyle />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default ProfileDetails;
