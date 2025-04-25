import { Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
const FamilyDetails=({setCurrentStep})=>{
    const [disableNext, setDisableNext] = useState(false);
    const dietOption=[
      {  name:"Vegetarian",  value:"vegetarian"},
      {  name:"Non Vegetarian",  value:"nonVegetarian"},
      {  name:"Eggitarian",  value:"eggitarian"},
      {  name:"Vegan",  value:"vegan"},
  
    ]
    const dietOptionHandler=(e)=>{
      console.log(e);
      
    }
    return(
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
          <div className="flex flex-col gap-[24px]  max-h-[300px] overflow-y-auto">
            <div className="flex flex-col ">
              <CustomText
                className={"!text-start !text-[24px] font-[500] "}
                text={"Family Details"}
              />
              <CustomText
                className={"!text-start !text-[14px] font-[400]  "}
                text={"Enhance your profile for better matches"}
              />
            </div>
        
          
            <Row>
              <Col span={24}>
                <CustomInput
                  placeholder={"Father Name"}
                  className={"!w-[430px]"}
                />
              </Col>
              
            </Row>
            <Row>
            <Col span={24}>
                <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Father Occupation"}
                  className={"!w-[430px]"}
                  option={dietOption}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomInput
                  placeholder={"Mother Name"}
                  className={"!w-[430px]"}
                />
              </Col>
              
            </Row>
            <Row>
            <Col span={24}>
                <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[430px]"}
                  option={dietOption}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomInput
                  placeholder={"Sibling"}
                  className={"!w-[430px]"}
                />
              </Col>
              
            </Row>
            <Row>
            <Col span={24}>
                <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Family Income"}
                  className={"!w-[430px]"}
                  option={dietOption}
                />
              </Col>
            </Row>
        </div>
         
          <div className="flex flex-col pt-[16px]">
            <CustomButton
              disabled={disableNext}
              onclick={() => {setCurrentStep(3)}}
              value={"Next"}
            />
          </div>
          </div>
      </Row> 
        </>
    )
}
export default FamilyDetails;