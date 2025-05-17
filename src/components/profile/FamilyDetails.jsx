import { Button, Col, Image, Row } from "antd";
import logo from "../../assets/logo/ajeevanLogo.png";
import CustomText from "../common/CustomText";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import { useState } from "react";
import CustomSelect from "../common/CustomSelect";
const FamilyDetails = ({ setCurrentStep }) => {
  const [disableNext, setDisableNext] = useState(false);
  const [inputValue, SetInputValue] = useState({
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    siblings: "",
    familyIncome: "",
  });
  console.log(inputValue);

  const fatherOccupationOptions = [
    { label: "Private Sector", value: "privateSector" },
    { label: "Government/Public sector", value: "govtSector" },
    { label: "Retired", value: "retired" },
    { label: "Business Owner / Enterpreneur", value: "bussinessOwner" },
    { label: "Unemployed", value: "unEmoloyed" },
    { label: "Defence", value: "defence" },
    { label: "Other", value: "Other" },
  ];
  const motherOccupationOptions = [
    { label: "Private Sector", value: "privateSector" },
    { label: "Government/Public sector", value: "govtSector" },
    { label: "Retired", value: "retired" },
    { label: "Business Owner / Enterpreneur", value: "bussinessOwner" },
    { label: "Unemployed", value: "unEmoloyed" },
    { label: "Defence", value: "defence" },
    { label: "House Wife", value: "houseWife" },
    { label: "Other", value: "Other" },
  ];
  const incomeOtions = [
    { label: "Below 1 Lakh", value: "belowOneLakh" },
    { label: "INR 1 Lakh to 3 Lakh", value: "uptothreeLakh" },
    { label: "INR 4 Lakh to 8 Lakh", value: "uptoeightLakh" },
    { label: "INR 8 Lakh to 15 Lakh", value: "uptofifteenLakh" },
    { label: "INR 15 Lakh to 50 Lakh", value: "uptofiftyLakh" },
    { label: "1 Crore +", value: "uptooneCrore" },
  ];
  const inputHandler = (e) => {
    const { name, value } = e.target;
      SetInputValue({ ...inputValue, [name]: value });
  };
  const selectHandler = (e, select) => {
    SetInputValue({ ...inputValue, [select.selected]: e.target.value });
  };
  return (
    <>
      <Row>
        <div className="  bg-white rounded-2xl w-[530px]  p-5 shadow-2xl">
          <div className="flex justify-center">
            <Image
              preview={false}
              className="!h-[50px] !w-[200px]"
              src={logo}
            />
          </div>
          <div className="flex flex-col gap-[24px]  xl:h-[400px] h-[300px] overflow-y-auto">
            <div className="flex flex-col ">
              <CustomText
                className={"!text-start !text-[24px] font-[500] "}
                text={"Family Details"}
              />
              <CustomText
                className={"!text-start !text-[14px] font-[400]  "}
                text={"Enhance your profile for better matches"}
              />
            </div>

            <Row>
              <Col span={24}>
                <CustomInput
                  name={"fatherName"}
                  value={inputValue?.fatherName}
                  onchange={(e) => {
                    inputHandler(e);
                  }}
                  placeholder={"Father Name"}
                  className={"!w-full"}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomSelect
                  value={inputValue?.fatherOccupation}
                  onChange={(e) =>
                    selectHandler(e, { selected: "fatherOccupation" })
                  }
                  options={fatherOccupationOptions}
                  placeholder="Father Occupation"
                  className="!text-secondary"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomInput
                  name={"motherName"}
                  value={inputValue?.motherName}
                  onchange={(e) => {
                    inputHandler(e);
                  }}
                  placeholder={"Mother Name"}
                  className={"!w-full"}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomSelect
                  value={inputValue?.motherOccupation}
                  onChange={(e) =>
                    selectHandler(e, { selected: "motherOccupation" })
                  }
                  options={motherOccupationOptions}
                  placeholder="Mother Occupation"
                  className="!text-secondary"
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomInput
                  name={"siblings"}
                  value={inputValue?.siblings}
                  onchange={(e) => {
                    inputHandler(e);
                  }}
                  placeholder={"Sibling"}
                  className={"!w-full"}
                />
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <CustomSelect
                  value={inputValue?.familyIncome}
                  onChange={(e) =>
                    selectHandler(e, { selected: "familyIncome" })
                  }
                  options={incomeOtions}
                  placeholder="Family Income"
                  className="!text-secondary"
                />
              </Col>
            </Row>
          </div>

          <div className="flex flex-col pt-[16px]">
            <CustomButton
              disabled={disableNext}
              onclick={() => {
                setCurrentStep(3);
              }}
              value={"Next"}
            />
          </div>
        </div>
      </Row>
    </>
  );
};
export default FamilyDetails;
