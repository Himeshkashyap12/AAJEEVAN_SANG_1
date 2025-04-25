import { Image, Row, Steps } from "antd";
import "./profile.css";
import authBackgroundImaage from "../../assets/authImages/authBackground.jpg";
import { useState } from "react";
import PersonalDetails from "./PersonalDetails";
import BasicDetails from "./BasicDetails";
import EducationalDetails from "./EducationalDetails";
import FamilyDetails from "./FamilyDetails";
import SocialDetails from "./SocialDetails";
import UploadProfile from "./UploadProfile";
import UploadMultipleProfile from "./UploadMultipleProfile";
import VerifyDocument from "./VerifyDocument";
const Profile = () => {
  const [currentStep,setCurrentStep]=useState(0)
  const [document,setDocument]=useState(null);
  
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
        <div className="profile flex justify-center md:w-[85%] w-[100%] left-0 right-0 mx-auto  absolute top-2" >
          {currentStep!=null && <Steps
        current={currentStep}
        colorTextDisabled={"red"}
        motionDurationSlow	
        colorBorderSecondary={"#ff4d4f!important"}
        items={[
          {
          },
          {
          },
          {
          },
          {
          },
          {
          },
        ]}
      />}
        </div>
        <div className="absolute left-0 right-0 mx-auto flex justify-center top-0 bottom-0 items-center ">
          {currentStep===0 && <BasicDetails setCurrentStep={setCurrentStep}/>}
          {currentStep===1 && <PersonalDetails setCurrentStep={setCurrentStep}/>}
          {currentStep===2 && <FamilyDetails setCurrentStep={setCurrentStep}/>}
          {currentStep===3 && <SocialDetails setCurrentStep={setCurrentStep}/>}
          {currentStep===4 && <EducationalDetails setCurrentStep={setCurrentStep} setDocument={setDocument}/>}
          {document==="uploadProfile" && <UploadProfile setDocument={setDocument} />}
          {document==="uploadMultipleProfile" && <UploadMultipleProfile setDocument={setDocument} />}
          {document==="verifyDocument" && <VerifyDocument setDocument={setDocument} />}
        </div>
      </Row>
    </>
  );
};
export default Profile;
