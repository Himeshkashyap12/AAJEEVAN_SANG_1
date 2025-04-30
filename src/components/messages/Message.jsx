import {  Tabs } from "antd";
import {  useState } from "react";
import CustomText from "../common/CustomText";
import MyMessages from "./MyMessages";
import MyCalls from "./MyCalls";
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
        <div className="py-[24px]  mx-auto">
        <Tabs centered defaultActiveKey="1" items={items} onChange={tabSelectChange} />
        </div>   
        </>
    )
}
export default Messages;