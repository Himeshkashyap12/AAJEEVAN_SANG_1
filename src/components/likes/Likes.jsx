
import {  Col, Row, Tabs } from "antd";
import {  useState } from "react";
import CustomText from "../common/CustomText";
import MyLikes from "./MyLikes";
import LikesMe from "./LikesMe";
import CustomSideProfile from "../common/CustomSideProfile";
const Likes=()=>{
     const [selectedKey,setSelectedKey]=useState(1)
        const tabSelectChange = key => {
            setSelectedKey(key)
          };
          const items = [
            {
              key: '1',
              label: <CustomText  className={`${selectedKey===1?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"Likes Me"}/>,
              children: <LikesMe likesMe={[{},{},[]]}/>,
            },
            {
              key: '2',
              label: <CustomText  className={`${selectedKey===2?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"My Likes"}/>,
              children: <MyLikes myLikes={[{},{},{}]}/>,
            }
          ];
    return(
        <>
         
        <Row className="px-[50px]">
        <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24}>
        <div className="py-[24px] pe-[50px]">
        <Tabs centered={true} defaultActiveKey="1" items={items} onChange={tabSelectChange} />
        </div>   
        </Col>
        <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CustomSideProfile />
        </Col>
      </Row> 
        </>
    )
}
export default Likes;