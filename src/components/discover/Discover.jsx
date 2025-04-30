import { Col, Row, Segmented, Tabs } from "antd";
import {  useState } from "react";
import "./discover.css"
import CustomText from "../common/CustomText";
import AllDiscover from "./AllDiscover.jsx";
import SelectedDiscover from "./SelectedDiscover";
const Discover=()=>{
    const [selectedKey,setSelectedKey]=useState(1)
    const tabSelectChange = key => {
        setSelectedKey(key)
      };
      const items = [
        {
          key: '1',
          label: <CustomText  className={`${selectedKey===1?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"All"}/>,
          children: <AllDiscover allDiscover={[{},{},[]]}/>,
        },
        {
          key: '2',
          label: <CustomText  className={`${selectedKey===2?"!text-[#fff]":"text-[#fff]"} !text-[16px] !font-[400]`} text={"Selected"}/>,
          children: <SelectedDiscover allSelected={[{},{},{}]}/>,
        }
      ];

      
    return(
        <>
        <div className="py-[24px]  a" >
        <Tabs centered  defaultActiveKey="1" items={items} onChange={tabSelectChange} />
        </div>   
     
        </>
    )
}
export default Discover;