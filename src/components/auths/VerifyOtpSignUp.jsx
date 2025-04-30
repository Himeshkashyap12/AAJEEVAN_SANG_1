import {  Avatar, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustonCheckbox";
import CustomButton from "../common/CustomButton";
import OtpInput from "../common/OtpInput";
import editIcon from "../../assets/icons/editIcon.svg"
const VerifyOtpSignUp = ({ setAuth }) => {
  return (
    <Row>
      <div className="flex flex-col gap-[16px] items-center bg-white rounded-2xl w-[480px] py-5 shadow-2xl">
        <div>
          <Image preview={false} className="!h-[50px] !w-[200px]" src={logo} />
        </div>
        <CustomText className={"!text-[24px] font-[500]"} text={"Enter OTP to Sign up"} />
       <div className="flex flex-col gap-1">
         <CustomText
          className={"!text-[12px] font-[300] "}
          text={"OTP has been sent to"}
        />
        <div className="flex gap-1 items-center">
         <CustomText
          className={"!text-[12px] font-[300] !text-[#B1B1B1] "}
          text={`+91 x x x x x x x x x x `}
        />
        <Image preview={false} className="!size-[13px]" src={editIcon}/>
        </div>
        </div>
        <div className="px-5">
        <OtpInput/>
         </div>

        <div className="flex flex-col gap-[16px]">

          <CustomCheckbox />
          <CustomButton className={"w-[350px]"}  value={"Send OTP"} />
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
              <CustomText text={`Already have an Account?`} />
              <div onClick={()=>{setAuth("SendOtpSignUp")}} className="!text-[#951025] cursor-pointer">Sign Up</div>
            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default VerifyOtpSignUp;
