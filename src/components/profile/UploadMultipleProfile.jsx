import {  Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import CustomFileUpload from "../common/CustomFileUpload";
const UploadMultipleProfile=()=>{
    const [disableNext,setDisableNext]=useState(false)
    return(
        <>
        <Row>
        <div className="bg-white rounded-2xl w-[530px] p-5 shadow-2xl">
          <div className="flex justify-center">
            <Image
              preview={false}
              className="!h-[50px] !w-[200px]"
              src={logo}
            />
          </div>
          <div className="flex flex-col gap-[16px]  max-h-[300px] overflow-y-auto">
          <div className="flex flex-col">
            <CustomText
              className={"!text-start !text-[24px] font-[500]"}
              text={"Time to put a face to the name"}
            />
            <CustomText
              className={"!text-start !text-[14px] font-[400]  "}
              text={"You do you! Add at least 4 photo, whether it’s your pet, eating your fave food, or in a place you love."}
            />
          </div>
        
          <div>
            <CustomFileUpload/>
          </div>
          <Row>
            <div className="flex flex-col">
              <div className="flex  gap-2  items-center">
                <CustomText
                  className={
                    "!text-[#fff] !text-center  !size-[15px] rounded-full bg-[#7C7C7C] !text-[10px]  "
                  }
                  text={"!"}
                />

                <CustomText
                  className={"text-[14px] font-[300]"}
                  text={"Hold & drag to reorder"}
                />
            </div>
            <div className="flex gap-2  items-center">
                <CustomText
                  className={"!text-[#fff] !text-center  !size-[15px] rounded-full bg-[#7C7C7C] !text-[10px]"}
                  text={"!"}
                />
                <CustomText
                  className={"text-[14px] font-[300]"}
                  text={"Please add at least 4 photos to continue"}
                />
            </div>
            </div>
          </Row>
         
          </div>
          <div className="flex flex-col pt-[16px]">
            <CustomButton
            disabled={disableNext}
              onclick={() => {setCurrentStep(1)}}
              value={"Completed"}
            />
          
          </div>
          <div className="flex flex-col gap-1 justify-center items-center pt-[16px]">
            <CustomText text={"Your photos are 100% safe."}/>
            <CustomText text={"Photo Privacy controls available in Settings."}/>
          </div>
        </div>
      </Row>
        </>
    )
}

export default UploadMultipleProfile;