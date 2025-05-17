import {  Col, Row, Tabs } from "antd";
import {  useState } from "react";
import CustomText from "../common/CustomText";
import MyMessages from "./MyMessages";
import MyCalls from "./MyCalls";
import CustomSideProfile from "../common/sideProfile/CustomSideProfile";
// import MyLikes from "./MyLikes";
// import LikesMe from "./LikesMe";
const Messages=()=>{
     const [selectedKey,setSelectedKey]=useState(1)
        const tabSelectChange = key => {
            setSelectedKey(key)
          };
          const items = [
            {
              key: '1',
              label: <CustomText  className={`${selectedKey===1?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"Messages"}/>,
              children: <MyMessages messageConnection={[1,2,3,4,5,6,7,8,9,0,7,2,2]}/>,
            },
            {
              key: '2',
              label: <CustomText  className={`${selectedKey===2?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"Calls"}/>,
              children: <MyCalls />,
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
export default Messages;