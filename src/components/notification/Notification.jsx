import React, { useState } from "react";
import { Avatar, Col, Row, Tabs } from "antd";
import CustomText from "../common/CustomText";
import arrowleft from "../../assets/icons/arrowleft.png";
import NotificationDetails from "./NotificationDetails";
import CustomSideProfile from "../common/CustomSideProfile";

const Notification = () => {
  const [selectedKey, setSelectedKey] = useState(1);
  const partnerItems = [
    {
      key: "1",
      label: (
        <CustomText
          className={`${
            selectedKey === 1 ? "!text-[#fff]" : "text-[#000]"
          } !text-[16px] !font-[400]`}
          text={"What's New Here"}
        />
      ),
      children: <NotificationDetails />,
    },
  ];
  const partnerChangeHandler = (key) => {
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
              items={partnerItems}
              onChange={(e) => {
                partnerChangeHandler(e);
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
export default Notification;
