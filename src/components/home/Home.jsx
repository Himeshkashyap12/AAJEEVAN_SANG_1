import { Col, Image, Progress, Row } from "antd";
import HomeProfile from "./HomeProfile";
import CustomSideProfile from "../common/CustomSideProfile";
import CustomText from "../common/CustomText";
import CustomButtonTwo from "../common/CustomButtonTwo";
import completeSideImage from "../../assets/profile/complete-profile.jpg";
const Home = () => {
  return (
    <>
      <Row className="px-[50px]">
        <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24}>
          <div className="flex flex-col gap-[24px]  py-[16px] pe-[50px]">
            <HomeProfile heading={"New Profiles"} />
            <HomeProfile heading={"All Matches"} match={true} />
            <div className="complete-profile py-[30px]">
              <Row>
                <Col span={6}>
                  <Image
                    className=" !h-[100px] !w-[320px] object-cover"
                    src={completeSideImage}
                    preview={false}
                  />
                </Col>

                <Col span={18}>
                  <div className="flex justify-between items-center px-[24px] !bg-[#F81B3E] py-[20px] !rounded-r-2xl ">
                    <div className="flex gap-[16px] items-center ">
                      <Progress
                        className=""
                        size={"small"}
                        strokeColor={"#FBD100"}
                        type="circle"
                        percent={75}
                      />
                      <CustomText
                        className={"text-[12px] !text-[#fff] font-[400]"}
                        text={"Complete your profile "}
                      />
                    </div>
                    <div>
                      <CustomButtonTwo
                        onclick={() => {
                          navigate("/edit-profile");
                        }}
                        value={"Complete it!"}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <HomeProfile heading={"All Shortlist"} />
            <HomeProfile heading={"All Connect Request"} />
          </div>
        </Col>
        <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CustomSideProfile />
        </Col>
      </Row>
    </>
  );
};
export default Home;
