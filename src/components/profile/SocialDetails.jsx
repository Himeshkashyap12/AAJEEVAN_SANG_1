
import { Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
import CustomCheckBox from "../common/CustomCheckbox";
const SocialDetails=({setCurrentStep})=>{
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
          <div className="flex flex-col gap-[20px]  max-h-[300px] overflow-y-auto">
            <div className="flex flex-col ">
              <CustomText
                className={"!text-start !text-[24px] font-[500] "}
                text={"Social Details"}
              />
              <CustomText
                className={"!text-start !text-[14px] font-[400]  "}
                text={"Enhance your profile for better matches"}
              />
            </div>
        
          <Row>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
          </Row>
          <Row>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
          </Row>
          
            <Row>
            <Col span={24}>
            <div className="flex flex-col">
                <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[430px]"}
                  option={dietOption}
                />
                <CustomCheckBox value={
                    <div className="flex flex-col ">
                    <CustomText className={"!text-[12px] !text-secondary"} text={"Caste no bar "}/>
                    <CustomText className={"!text-[10px] !text-secondary"} text={"I am open to marry Marriage? (optional)"}/>

                </div>}/>
                </div>
              </Col>
            </Row>
            <Row>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
            <Col span={12}>
            <CustomSelect
                handleSelect={(e)=>{dietOptionHandler(e)}}
                  placeholder={"Mother Occupation"}
                  className={"!w-[200px]"}
                  option={dietOption}
                />
                </Col>
          </Row>
            
           
        </div>
         
          <div className="flex flex-col pt-[16px]">
            <CustomButton
              disabled={disableNext}
              onclick={() => {setCurrentStep(4)}}
              value={"Next"}
            />
          </div>
          </div>
      </Row> 
        </>
    )
}
export default SocialDetails;