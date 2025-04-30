import { Avatar, Col, Image, Row } from "antd";
import backgroundImageUrl from "../../assets/plan/plan.jpg"
import CustomText from "../common/CustomText";
import { CheckOutlined } from "@ant-design/icons";
import CustomButtonTwo from "../common/CustomButtonTwo";
const Plan = () => {
  return (
    <>
      <div className="h-[94vh] " style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
        <div className="w-[70%] mx-auto !py-[50px]">
          <div className="flex flex-col w-[73%] ">
            <CustomText className={"!text-[50px] !font-[400]"} text={"Plans & Pricing"} />
            <CustomText className={"!text-[18px] !font-[400] !text-[#848199]"} text={"Explore our flexible pricing plans designed to suit every budget on your journey to find love. Choose from basic to premium options, each offering unique features to enhance your matchmaking experience."} />
          </div>
          <Row className="bg-[#FFFFFF80] backdrop-blur-sm max-h-[500px]  rounded-xl p-[50px] mt-[100px]">
            <Col span={8}>
              <div className="flex flex-col gap-[24px] ">
                <div className="flex items-baseline gap-1">
                  <CustomText className={"!text-[36px] font-[700] "} text={"₹ 199"} />
                  <CustomText className={"!text-[18px] font-[500] !text-secondary"} text={"/month"} />
                </div>
                <div className="flex flex-col gap-[18px]">
                  <CustomText className={"!text-[28px] font-[700] "} text={"Weekly plan"} />
                  <CustomText className={"!text-[18px] font-[600] !text-secondary"} text={"Unleash the power of automation."} />
                </div>
                <div className="flex flex-col gap-[18px] pt-[24px]">
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"Unlimited Messaging"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"7 Profiles Interactions"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"No Boost"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"No In-app calling available"} />
                  </div>
                  <div className=" flex justify-center w-[70%]">
                    <CustomButtonTwo className={"!text-[16px] !border-none  w-[226px] font-[500] !bg-[#231D4F] !text-[#fff]"} value={"Choose plan"} />
                  </div>

                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="flex flex-col gap-[24px]">
                <div className="flex items-baseline gap-1">
                  <CustomText className={"!text-[36px] font-[700] "} text={"₹ 666"} />
                  <CustomText className={"!text-[18px] font-[500] !text-secondary"} text={"/month"} />
                </div>
                <div className="flex flex-col gap-[18px]">
                  <CustomText className={"!text-[28px] font-[700] "} text={"Basic plan"} />
                  <CustomText className={"!text-[18px] font-[600] !text-secondary"} text={"Advanced tools to take your work to the next level."} />
                </div>
                <div className="flex flex-col gap-[18px]">
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"Unlimited Messaging"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"30 Profiles Interactions"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"2 Boosts for 2 hours (1 in a day)"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F81B3E", color: "#fff", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-secondary "} text={"In-app calling available"} />
                  </div>
                  <div className=" flex justify-center w-[70%]">
                    <CustomButtonTwo className={"!text-[16px] !border-none w-[226px] font-[500] !bg-[#231D4F] !text-[#fff]"} value={"Choose plan"} />
                  </div>

                </div>
              </div>
            </Col>
            <Col span={8}>
              <div className="relative flex flex-col px-[24px] pb-[12px] gap-[24px] bg-[#F81B3E] rounded-3xl  -top-[150px]  pt-[150px]">
                <div className="absolute bg-[#FFDA58] top-0 right-10 px-[24px] py-[12px] rounded-b-2xl">
                  <CustomText className={"text-[12px] font-[800] !text-[#F81B3E]"} text={"MOST POPULAR"} />
                </div>
                <div className="flex items-baseline gap-1">
                  <CustomText className={"!text-[36px] font-[700] !text-white "} text={"₹ 1999"} />
                  <CustomText className={"!text-[18px] font-[500] !text-white"} text={"/month"} />
                </div>
                <div className="flex flex-col gap-[18px]">
                  <CustomText className={"!text-[28px] font-[700] !text-[#fff]"} text={"Advance plan"} />
                  <CustomText className={"!text-[18px] font-[600] !text-white"} text={"Automation plus enterprice-grade features."} />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#fff", color: "#F81B3E", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-white "} text={"Multi-step zap"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#fff", color: "#F81B3E", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-white "} text={"Ultimated Premium Apps"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#fff", color: "#F81B3E", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-white "} text={"Ultimated users Team"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#fff", color: "#F81B3E", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-white "} text={"Advance Admin"} />
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <CheckOutlined className="!rounded-full size-[16px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#fff", color: "#F81B3E", fontWeight: "bold" }} />
                    <CustomText className={"!text-[18px] font-[400] !text-white "} text={"Custom Data Retention"} />
                  </div>
                  <div className=" flex justify-center w-[70%] mx-auto">
                    <CustomButtonTwo className={"!text-[16px] w-[226px] !border-none  font-[500] !bg-white !text-[#F81B3E]"} value={"Choose plan"} />
                  </div>

                </div>

              </div>
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}
export default Plan;