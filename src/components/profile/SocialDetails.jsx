
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
    const [inputValue, SetInputValue] = useState({
    maritalStatus: "",
    homeTown: "",
    motherToungue: "",
    relegion: "",
    caste: "",
    gothra: "",
    manglik: "",
  });
    const maritalStatusOptions=[
      {  label:"Single / Never married",  value:"vegetarian"},
      {  label:"Widowed / Widower",  value:"wodow"},
      {  label:"Divorced",  value:"divorced"},
      {  label:"Vegan",  value:"vegan"},
  
    ]
     const motherToungeOptions=[
      {  label:"Hindi",  value:"hindi"},
      {  label:"Marathi",  value:"matrathi"},
      {  label:"Punjabi",  value:"punjabi"},
      {  label:"Bengali",  value:"bengali"},
  
    ]
     const relegionOptions=[
      {  label:"Hindu",  value:"hindi"},
      {  label:"Islam",  value:"islam"},
      {  label:"Christian",  value:"christian"},
      {  label:"Sikh",  value:"sikh"},
  
    ]
    const CasteOtions=[
      {  label:"Hindi-Kamboj",  value:"hindi"},
      {  label:"Hindu-kamma",  value:"islam"},
      {  label:"Hindu-Kashmiripandit",  value:"christian"},
  
    ]
    const homeTownOption=[
      {  label:"Lucknow",  value:"lucknow"},
      {  label:"Delhi",  value:"delhi"},
      {  label:"Mumbai",  value:"mumbai"},
  
    ]
     const manglikOtion=[
      {  label:"Manglik",  value:"manglik"},
      {  label:"Non-manglik",  value:"nonManglik"},
  
    ]
    const dietOption=[{}]
   const inputHandler = (e) => {
    const { name, value } = e.target;
      SetInputValue({ ...inputValue, [name]: value });
  };
  const selectHandler = (e, select) => {
    SetInputValue({ ...inputValue, [select.selected]: e.target.value });
  };
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
          <div className="flex flex-col gap-[20px]  max-h-[400px] overflow-y-auto">
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
        
          <Row gutter={[20,20]}>
            <Col span={12}>
            
               <CustomSelect
                  value={inputValue?.maritalStatus}
                  onChange={(e) =>
                    selectHandler(e, { selected: "maritalStatus" })
                  }
                  options={maritalStatusOptions}
                  placeholder="Marital Status"
                  className="!text-secondary"
                />
                </Col>
            <Col span={12}>
              <CustomSelect
                  value={inputValue?.homeTown}
                  onChange={(e) =>
                    selectHandler(e, { selected: "maritalStatus" })
                  }
                  options={homeTownOption}
                  placeholder="Home Town"
                  className="!text-secondary"
                />
                </Col>
          </Row>
          <Row gutter={[20,20]}> 
            <Col span={12}>
             <CustomSelect
                  value={inputValue?.motherToungue}
                  onChange={(e) =>
                    selectHandler(e, { selected: "motherToungue" })
                  }
                  options={motherToungeOptions}
                  placeholder="Marital Status"
                  className="!text-secondary"
                />
                </Col>
            <Col span={12}>
            <CustomSelect
                  value={inputValue?.relegion}
                  onChange={(e) =>
                    selectHandler(e, { selected: "relegion" })
                  }
                  options={relegionOptions}
                  placeholder="Marital Status"
                  className="!text-secondary"
                />
                </Col>
          </Row>
          
            <Row>
            <Col span={24}>
            <div className="flex flex-col">
               <CustomSelect
                  value={inputValue?.relegion}
                  onChange={(e) =>
                    selectHandler(e, { selected: "caste" })
                  }
                  options={CasteOtions}
                  placeholder="Caste"
                  className="!text-secondary"
                />
                <CustomCheckBox value={
                    <div className="flex flex-col ">
                    <CustomText className={"!text-[12px] !text-secondary"} text={"Caste no bar "}/>
                    <CustomText className={"!text-[10px] !text-secondary"} text={"I am open to marry Marriage? (optional)"}/>

                </div>}/>
                </div>
              </Col>
            </Row>
            <Row gutter={[20,20]} >
               <Col span={12}>
            <CustomSelect
                  value={inputValue?.manglik}
                  onChange={(e) =>
                    selectHandler(e, { selected: "manglik" })
                  }
                  options={manglikOtion}
                  placeholder="Gothara"
                  className="!text-secondary"
                />
                </Col>
            <Col span={12}>
            <CustomSelect
                  value={inputValue?.manglik}
                  onChange={(e) =>
                    selectHandler(e, { selected: "manglik" })
                  }
                  options={manglikOtion}
                  placeholder="Manglik"
                  className="!text-secondary"
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