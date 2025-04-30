import {  Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import upload from "../../assets/uploadIcon/uploadIcon.png"
import { useState } from "react";
const UploadProfile=({setDocument})=>{
      const [disableNext,setDisableNext]=useState(false)
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
          <div className="flex flex-col gap-[16px]  ">
          <div className="flex flex-col ">
            <CustomText
              className={"!text-center !text-[24px] font-[500] "}
              text={"Double your chances of finding the perfect matches"}
            />
          </div>
          <div className="flex justify-center ">
            <Image
              preview={false}
              className="w-full"
              src={upload}
            />
          </div>
          </div>
          <div className="flex flex-col pt-[16px]">
            <CustomButton
            disabled={disableNext}
              onclick={() => {setDocument("uploadMultipleProfile")}}
              value={"Upload"}
            />
            <div className="flex flex-col justify-center items-center gap-1 pt-2">
            <CustomText text={"Your photos are 100% safe."}/>
            <CustomText text={"Photo Privacy controls available in Settings"}/>
            </div>
          </div>
        </div>
      </Row>
        </>
    )
}

export default UploadProfile