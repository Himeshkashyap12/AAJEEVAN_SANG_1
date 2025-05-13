import React, { useState } from "react";
import { Avatar, Col, Row, Tabs } from "antd";
import "./editProfile.css";
import CustomText from "../common/CustomText";
import { ArrowLeftOutlined } from "@ant-design/icons";
import arrowleft from "../../assets/icons/arrowleft.png";
import BasicInformation from "./BasicInformation";
import FamilyInformation from "./FamilyInformation";
import SocialInformation from "./SocialInformation";
import HabitInformation from "./HabitInformation";
import CustomSideProfile from "../common/CustomSideProfile";
const EditProfile = () => {
  const [selectedKey, setSelectedKey] = useState(1);
  const editItems = [
    {
      key: "1",
      label: (
        <CustomText
          className={`${
            selectedKey === 1 ? "!text-[#fff]" : "text-[#000]"
          } !text-[16px] !font-[400]`}
          text={"Basic & Personal Information"}
        />
      ),
      children: <BasicInformation />,
    },
    {
      key: "2",
      label: (
        <CustomText
          className={`${
            selectedKey === 2 ? "!text-[#fff]" : "text-[#000]"
          } !text-[16px] !font-[400]`}
          text={"Family  Information"}
        />
      ),
      children: <FamilyInformation />,
    },
    {
      key: "3",
      label: (
        <CustomText
          className={`${
            selectedKey === 3 ? "!text-[#fff]" : "text-[#000]"
          } !text-[16px] !font-[400]`}
          text={"Social Information"}
        />
      ),
      children: <SocialInformation />,
    },

    {
      key: "4",
      label: (
        <CustomText
          className={`${
            selectedKey === 4 ? "!text-[#fff]" : "text-[#000]"
          } !text-[16px] !font-[400]`}
          text={"Habit & Lifestyle  Information"}
        />
      ),
      children: <HabitInformation />,
    },
  ];
  const editChangeHandler = (key) => {
    setSelectedKey(key);
  };
  return (
    <>
      <Row className="px-[50px]">
        <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24}>
          <div className="edit-profile py-[24px] pe-[50px] ">
            <div className="pb-[40px]">
              <Avatar src={arrowleft} className="!size-[40px]" />
            </div>
            <Tabs
              defaultActiveKey="1"
              items={editItems}
              onChange={(e) => {
                editChangeHandler(e);
              }}
            />
          </div>
        </Col>
        <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CustomSideProfile />
        </Col>
      </Row>
    </>
  );
};
export default EditProfile;
