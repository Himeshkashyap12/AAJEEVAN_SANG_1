import { Avatar, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustonCheckbox";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
const SendOtpLogin = ({ setAuth }) => {
  const [mobile,setMobile]=useState("");
  
  return (
    <Row>
      <div className="flex flex-col gap-[16px] items-center bg-white rounded-2xl w-[480px] py-5 shadow-2xl">
        <div>
          <Image preview={false} className="!h-[50px] !w-[200px]" src={logo} />
        </div>
        <CustomText className={"!text-[24px] font-[500] pb-9"} text={"Sign In"} />
        <div className="flex flex-col gap-[16px]">
          <div className="ps-7 pe-5">
          <CustomInput
          name={"mobile"}
          onchange={(e)=>{setMobile(e.target.value)}}
            placeholder={"Enter your mobile number"}
            className={"!w-[328px]"}
            phoneNumber
          />
          </div>

          <CustomCheckbox />
          <CustomButton onclick={()=>{setAuth("VerifyOtpLogin")}}   value={"Send OTP"} />
          <div className="py-5">
            <div className="border-[1px] border-b !border-[lightGray] relative">
                <CustomText
                  className={
                    "!text-[16px] !text-secondary  flex  justify-center  font-[500]  absolute  left-0 right-0 mx-auto -top-4  bg-white w-[50px]  items-center  "
                  }
                  text={"or"}
                />
            </div>
          </div>
          <div className="flex justify-center ">
            <div className="flex gap-1 ">
              <CustomText text={`Don’t have an Account?`} />
              <div  onClick={()=>{setAuth("SendOtpSignUp")}} className="!text-[#951025] cursor-pointer">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default SendOtpLogin;
