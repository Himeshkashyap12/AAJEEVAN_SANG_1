
import {  Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustonCheckbox";
import CustomButton from "../common/CustomButton";
const SendOtpSignUp = ({ setAuth }) => {
  return (
    <Row>
      <div className="flex flex-col gap-[16px] items-center bg-white rounded-2xl w-[480px] py-5 shadow-2xl">
        <div>
          <Image preview={false} className="!h-[50px] !w-[200px]" src={logo} />
        </div>
        <CustomText className={"!text-[24px] font-[500]"} text={"Sign Up"} />
        <CustomText
          className={"font-[400] !text-secondary "}
          text={"Let’s Create your account first"}
        />
        <div className="flex flex-col gap-[16px]">
          <div className="px-5">
          <CustomInput
            placeholder={"Enter your mobile number"}
            className={"!w-[328px]"}
            phoneNumber
          />
          </div>

          <CustomCheckbox />
          <CustomButton onclick={()=>{setAuth("VerifyOtpSignUp")}}   value={"Send OTP"} />
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
              {/* <div className="!text-[#951025]">Sign in</div> */}
              <div  onClick={()=>{setAuth("SendOtpLogin")}} className="!text-[#951025] cursor-pointer">Sign in</div>

            </div>
          </div>
        </div>
      </div>
    </Row>
  );
};
export default SendOtpSignUp;
