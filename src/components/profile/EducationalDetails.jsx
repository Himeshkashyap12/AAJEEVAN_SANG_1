import { Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
import CustomInput from "../common/CustomInput";
import {PlusCircleOutlined  } from "@ant-design/icons";
const EducationalDetails = ({setDocument,setCurrentStep}) => {
  const [disableNext, setDisableNext] = useState(false);
  const dietOption = [
    { name: "Vegetarian", value: "vegetarian" },
    { name: "Non Vegetarian", value: "nonVegetarian" },
    { name: "Eggitarian", value: "eggitarian" },
    { name: "Vegan", value: "vegan" },
  ];
  const dietOptionHandler = (e) => {
    console.log(e);
  };
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
          <div className="flex flex-col gap-[20px]  max-h-[400px] overflow-y-auto">
            <div className="flex flex-col ">
              <CustomText
                className={"!text-start !text-[24px] font-[500] "}
                text={"Educational  & Employment Details"}
              />
              <CustomText
                className={"!text-start !text-[14px] font-[400]  "}
                text={"Enhance your profile for better matches"}
              />
            </div>
          <div className="flex flex-col gap-2">
            <CustomText className={"text-[18px] font-[600]"} text={"Highest Education"} />
            <div className="flex gap-1">
              <Button className="!rounded-full">Doctorate</Button>
              <Button className="!rounded-full">Masters</Button>
              <Button className="!rounded-full">Bachelors</Button>
              <Button className="!rounded-full">Diploma</Button>
              <Button className="!rounded-full">High school</Button>
            </div>
          </div>
          <Row >
            <Col span={12}>
              <div className="w-full">
                <CustomInput
                  placeholder={"Degree"}
                  className={"!w-[200px]"}
                />
              </div>
            </Col>
            <Col span={12}>
              <CustomInput placeholder={"Institute name"} className={"!w-[200px]"} />
            </Col>
          </Row>
          <div>
          <CustomText className={"text-[18px] font-[600]"} text={"Job Details"} />
          </div>

          <Row >

            <Col span={12}>
                <CustomSelect className={"!w-[200px]"} />
            </Col>
            <Col span={12}>
              <CustomSelect className={"!w-[200px]"} />

            </Col>
          </Row>
          <Row >

            <Col span={12}>
            <CustomInput
            icon={<div className="flex gap-2 items-center "><PlusCircleOutlined  style={{color:"#545454"}}/> <CustomText className={"!text-[20px] !text-[#D9D9D9]"} text={"|"}/></div>}
            phoneNumber={true}
                  placeholder={"Choose Document"}
                />
            </Col>
            <Col span={12}>
              <CustomSelect className={"!w-[200px]"} />

            </Col>
          </Row>
        </div>

          <div className="flex flex-col pt-[16px]">
            <CustomButton
              disabled={disableNext}
              onclick={() => {
                setDocument("uploadProfile");
                setCurrentStep(null)
              }}
              value={"Next"}
            />
          </div>
        </div>

      </Row>
    </>
  );
};
export default EducationalDetails;
