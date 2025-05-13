import { Col, Row, Segmented, Tabs } from "antd";
import {  useState } from "react";
import "./discover.css"
import CustomText from "../common/CustomText";
import AllDiscover from "./AllDiscover.jsx";
import SelectedDiscover from "./SelectedDiscover";
import CustomSideProfile from "../common/CustomSideProfile.jsx";
const Discover=()=>{
    const [selectedKey,setSelectedKey]=useState(1)
    const tabSelectChange = key => {
        setSelectedKey(key)
      };
      const items = [
        {
          key: '1',
          label: <CustomText  className={`${selectedKey===1?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"All"}/>,
          children: <AllDiscover allDiscover={[{},{},{}]}/>,
        },
        {
          key: '2',
          label: <CustomText  className={`${selectedKey===2?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"Selected"}/>,
          children: <SelectedDiscover allSelected={[{},{},{}]}/>,
        }
      ];

      
    return(
        <>
        

         <Row className="px-[50px]">
        <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24}>
        <div className="py-[24px] pe-[50px] " >
        <Tabs centered  defaultActiveKey="1" items={items} onChange={tabSelectChange} />
        </div>  
        </Col>
        <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CustomSideProfile />
        </Col>
      </Row> 
     
        </>
    )
}
export default Discover;