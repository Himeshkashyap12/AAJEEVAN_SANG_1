
import {  Tabs } from "antd";
import {  useState } from "react";
import CustomText from "../common/CustomText";
import MyLikes from "./MyLikes";
import LikesMe from "./LikesMe";
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
        <div className="py-[24px]">
        <Tabs centered={true} defaultActiveKey="1" items={items} onChange={tabSelectChange} />
        </div>   
        </>
    )
}
export default Likes;