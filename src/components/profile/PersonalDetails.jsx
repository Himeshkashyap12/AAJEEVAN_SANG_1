import { Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import OtpInput from "../common/OtpInput";
import CustomSelect from "../common/CustomSelect";
const PersonalDetails = ({ setCurrentStep }) => {
  const [disableNext, setDisableNext] = useState(false);
    const [diet, setDiet] = useState("");    
  const dietOptions = [
    { label: "Vegetarian", value: "vegetarian" },
    { label: "Non-Vegetarian", value: "nonVegetarian" },
    { label: "Eggitarian", value: "eggitarian" },
    { label: "Vegan", value: "vegan" },
  ];


  return (
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
          <div className="flex flex-col gap-[16px]  max-h-[400px] overflow-y-auto">
            <div className="flex flex-col ">
              <CustomText
                className={"!text-start !text-[24px] font-[500] "}
                text={"Personal Details"}
              />
              <CustomText
                className={"!text-start !text-[14px] font-[400]  "}
                text={"Enhance your profile for better matches"}
              />
            </div>
            <div className="relative flex flex-col gap-2">
              <CustomText
                className={"text-[18px] font-[600]"}
                text={"Profile create for"}
              />
              <div className="absolute top-0 left-30 text-[red]">*</div>
              <div className="flex gap-2">
                <Button className="!rounded-full">Self</Button>
                <Button className="!rounded-full">Daughter</Button>
                <Button className="!rounded-full">Sister</Button>
                <Button className="!rounded-full">Relative</Button>
                <Button className="!rounded-full">Son</Button>
              </div>
            </div>
            <Row>
              <Col span={12}>
                <div className="w-full flex gap-2 items-center">
                  <CustomText text={"Height"} />
                  <OtpInput className length={2} />
                </div>
              </Col>
              <Col span={12}>
                <div className="w-full flex gap-2 items-center">
                  <CustomText className={"!max-w-[50]"} text={"Weight"} />
                  <CustomInput
                    placeholder={"Weight in Kg"}
                    className={"!max-w-[190px]"}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <CustomInput
                  placeholder={"Current Location"}
                  className={"!w-[200px]"}
                />
              </Col>
              <Col span={12}>
                  <CustomSelect
                    name="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    options={dietOptions}
                    placeholder="What's Your Diet?"
                    className="!text-secondary"
                  />
              </Col>
            </Row>
            <div className="relative flex flex-col gap-2">
              <CustomText
                className={"text-[18px] font-[600]"}
                text={"Do you smoke?"}
              />
              <div className="absolute top-0 left-27 text-[red]">*</div>
              <div className="flex gap-2">
                <Button className="!rounded-full">Yes</Button>
                <Button className="!rounded-full">No</Button>
                <Button className="!rounded-full">Ocassional/socially</Button>
              </div>
            </div>
            <div className="relative flex flex-col gap-2">
              <CustomText
                className={"text-[18px] font-[600]"}
                text={"Do you drink?"}
              />
              <div className="absolute top-0 left-27 text-[red]">*</div>
              <div className="flex gap-2">
                <Button className="!rounded-full">Yes</Button>
                <Button className="!rounded-full">No</Button>
                <Button className="!rounded-full">Ocassional/socially</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-[16px]">
            <CustomButton
              disabled={disableNext}
              onclick={() => {setCurrentStep(2)}}
              value={"Next"}
            />
          </div>
        </div>
      </Row>
    </>
  );
};
export default PersonalDetails;
