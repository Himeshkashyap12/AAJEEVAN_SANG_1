import { useState } from "react";
import CustomText from "../CustomText";
import { Col, Row } from "antd";
import CustomSelect from "../CustomSelect";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";

const CommonSearch = () => {
  const [inputValue, SetInputValue] = useState({
    minAge: "",
    maxAge: "",
    minHeight: "",
    maxHeight: "",
    maritalStatus: "",
    religion: "",
    caste: "",
    motherToungue: "",
    minIncome: "",
    maxIncome: "",
    country: "",
    state: "",
    manglik: "",
    education: "",
    occupation: "",
  });
  console.log(inputValue);
  const yearOption = [
    { label: "18 Years", value: 18 },
    { label: "19 Years", value: 19 },
    { label: "20 Years", value: 20 },
    { label: "21 Years", value: 21 },
    { label: "22 Years", value: 22 },
  ];

  const selectHandler = (e, select) => {
    SetInputValue({ ...inputValue, [select.selected]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-[40px]">
      <Row gutter={[20,20]}>
        <Col span={6}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Min. Age"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "minAge" })}
              options={yearOption}
              placeholder="Min. Age"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={6}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Max. Age"} />
            <CustomSelect
              value={inputValue?.maxAge}
              onChange={(e) => selectHandler(e, { selected: "maxAge" })}
              options={yearOption}
              placeholder="Max. Age"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={6}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Min. Height"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "minHeight" })}
              options={yearOption}
              placeholder="Min. height"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={6}>
         <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Min. Height"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "minAge" })}
              options={yearOption}
              placeholder="Max. Age"
              className="!text-secondary"
            />
          </div>
        </Col>
      </Row>
      <Row gutter={[20,20]}>
        <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Mother tongue"} />
            <CustomInput
            
              placeholder="Marital Status"
              className="!text-secondary !w-[180px]"  
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Religion"} />
            <CustomSelect
              value={inputValue?.religion}
              onChange={(e) => selectHandler(e, { selected: "religion" })}
              options={yearOption}
              placeholder="Hindu"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Caste"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "caste" })}
              options={yearOption}
              placeholder="Doesn't Matter"
              className="!text-secondary"
            />
          </div>
        </Col>
        
      </Row>
       <Row gutter={[20,20]}>
        <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Mother toungues"} />
            <CustomInput
            
              placeholder="Mother toungue"
              className="!text-secondary !w-[180px]"  
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Min. Income"} />
            <CustomSelect
              value={inputValue?.religion}
              onChange={(e) => selectHandler(e, { selected: "minIncome" })}
              options={yearOption}
              placeholder="Min. Income"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Max. Income"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "Max. Income" })}
              options={yearOption}
              placeholder="Doesn't Matter"
              className="!text-secondary"
            />
          </div>
        </Col>
        
      </Row>
       <Row gutter={[20,20]}>
        
         <Col span={12}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Country"} />
            <CustomSelect
              value={inputValue?.religion}
              onChange={(e) => selectHandler(e, { selected: "country" })}
              options={yearOption}
              placeholder="India"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={12}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"State/city"} />
            <CustomSelect
              value={inputValue?.minAge}
              onChange={(e) => selectHandler(e, { selected: "Max. Income" })}
              options={yearOption}
              placeholder="India"
              className="!text-secondary"
            />
          </div>
        </Col>
        
      </Row>
     
       <Row gutter={[20,20]}>
        <Col span={8}>
          <div className="flex flex-col gap-5">
           <CustomText className={"font-[300] "} text={"Manglik"} />
            <CustomSelect
              value={inputValue?.religion}
              onChange={(e) => selectHandler(e, { selected: "manglik" })}
              options={yearOption}
              placeholder="Manglik"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Education"} />
            <CustomSelect
              value={inputValue?.religion}
              onChange={(e) => selectHandler(e, { selected: "education" })}
              options={yearOption}
              placeholder="education"
              className="!text-secondary"
            />
          </div>
        </Col>
         <Col span={8}>
          <div className="flex flex-col gap-5">
            <CustomText className={"font-[300] "} text={"Occupation"} />
            <CustomSelect
              value={inputValue?.occupation}
              onChange={(e) => selectHandler(e, { selected: "Doesn't Matter" })}
              options={yearOption}
              placeholder="Doesn't Matter"
              className="!text-secondary"
            />
          </div>
        </Col>
        
      </Row>
      <Row>
        <Col span={24}>
        <div className="flex flex-col ">
        <CustomButton value={"Search"}/>
        </div>
        </Col>
      </Row>
    </div>
  );
};
export default CommonSearch;
