import { useState } from "react";
import CustomRadioButton from "../CustomRadioButton";
import CustomText from "../CustomText";
import CustomButton from "../CustomButton";

const LanguageSetting=()=>{
    const [language,setLangusge]=useState("english");
    
    const languageHandler=(e)=>{
        setLangusge(e.target.value);
    }
    return(
        <div className="flex flex-col gap-[16px] pt-[24px]">
       <div className="flex justify-between">
        <CustomText className={"tex-[18px] font-[600]"} text={"Englsh (UK)"}/>
        <CustomRadioButton value={language} onchange={(e)=>{languageHandler(e)}} option={[{value:"english"}]}/>
         </div>
         <div className="flex justify-between">
        <CustomText className={"tex-[18px] font-[600]"} text={"Hindi"}/>
        <CustomRadioButton value={language} onchange={(e)=>{languageHandler(e)}} option={[{value:"hindi"}]}/>
         </div>
         <div className="flex justify-between w-full pt-[20px]" >
            <CustomButton  className={"w-full !text-[#fff] "} value={"Continue"}/>
         </div>
        </div>
    )
}
export default LanguageSetting;
background: ;
