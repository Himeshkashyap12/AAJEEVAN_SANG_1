import { Image, Row } from "antd";
import authBackgroundImaage from "../../assets/authImages/authBackground.jpg";
import CustomText from "../common/CustomText";
import SendOtpLogin from "./SendOtpLogin";
import SendOtpSignUp from "./SendOtpSignUp";
import VerifyOtpLogin from "./VerifyOtpLogin";
import VerifyOtpSignUp from "./VerifyOtpSignUp";
import { useState } from "react";

const Auth = () => {
  const [auth, setAuth] = useState("SendOtpSignUp");
  return (
    <>
      <Row>
        <div className="h-[45vh] w-full">
          <Image
            className="object-cover"
            preview={false}
            src={authBackgroundImaage}
            width="100%"
            height="100%"
          /> 
        </div>
        <div className="absolute left-0 right-0 flex  justify-center items-center top-0 bottom-0"> 
          {auth==="SendOtpLogin" && <SendOtpLogin setAuth={setAuth}/>}
          {auth==="SendOtpSignUp" && <SendOtpSignUp setAuth={setAuth}/>}
          {auth==="VerifyOtpLogin" && <VerifyOtpLogin setAuth={setAuth}/>}
          {auth==="VerifyOtpSignUp" && <VerifyOtpSignUp setAuth={setAuth}/>}
        </div>

        <div className="footer absolute bottom-5 flex justify-center w-full">
            <div className="flex gap-10">
                <div>
                <CustomText className={"!text-secondary font-[500]"} text={`© 2025 Aajeevansangh. All rights reserved.`}/>
                </div>
                <div className="flex gap-3">
                <CustomText className={"font-[700]"} text={`Terms & Condition`}/>
                <CustomText text={`|`}/>
                <CustomText className={"font-[700]"} text={`Privacy & Policy`}/>
                </div>
            </div>
        </div>
      </Row>
    </>
  );
};
export default Auth;
