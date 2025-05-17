import {  Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
const BasicDetails = ({setCurrentStep}) => {
  const [disableNext,setDisableNext]=useState(false)
  return (
    <>
      <Row>
        <div className="  bg-white rounded-2xl w-[530px] p-5 shadow-2xl">
          <div className="flex justify-center">
            <Image
              preview={false}
              className="!h-[50px] !w-[200px]"
              src={logo}
            />
          </div>
          <div className="flex flex-col gap-[16px]  h-[400px] overflow-y-auto">
          <div className="flex flex-col ">
            <CustomText
              className={"!text-start !text-[24px] font-[500] "}
              text={"Basic Details"}
            />
            <CustomText
              className={"!text-start !text-[14px] font-[400]  "}
              text={
                "Help us find the perfect match for you, share us your details"
              }
            />
          </div>
          <div className="relative flex flex-col gap-2">
            <CustomText className={"text-[18px] font-[600]"} text={"Gender"} />
            <div className="absolute top-0 left-13 text-[red]">*</div>
            <div className="flex gap-2">
              <Button className="!rounded-full">Male</Button>
              <Button className="!rounded-full">Female</Button>
            </div>
          </div>
          <Row >
            <Col span={12}>
              <div className="w-full">
                <CustomInput
                  placeholder={"First name"}
                  className={"!w-[220px]"}
                />
              </div>
            </Col>
            <Col span={12}>
              <CustomInput placeholder={"Last name"} className={"!w-[220px]"} />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CustomInput
                className={"w-[465px]"}
                placeholder={"Email Address"}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CustomInput
                type={"date"}
                className={"w-[465px]"}
                placeholder={"Date of birth"}
              />
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <CustomInput
                phoneNumber
                className={"w-[465px]"}
                placeholder={"Mobile Number"}
              />
            </Col>
          </Row>
          <Row>
              <div className="flex gap-2  items-center">
                <CustomText
                  className={
                    "!text-[#fff] !text-center  !size-[15px] rounded-full bg-[#7C7C7C] !text-[10px]  "
                  }
                  text={"!"}
                />

                <CustomText
                  className={"text-[14px] font-[300]"}
                  text={"Matches will contact you on this number"}
                />
            </div>
          </Row>
          </div>
          <div className="flex flex-col pt-[16px]">
            <CustomButton
            disabled={disableNext}
              onclick={() => {setCurrentStep(1)}}
              value={"Next"}
            />
          </div>
        </div>
      </Row>
    </>
  );
};
export default BasicDetails;
