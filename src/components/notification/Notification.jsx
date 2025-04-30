
import React, { useState } from 'react';
import { Avatar, Tabs } from 'antd';
import CustomText from '../common/CustomText';
import arrowleft from "../../assets/icons/arrowleft.png"
import NotificationDetails from './NotificationDetails';

const Notification=()=>{
    const [selectedKey,setSelectedKey]=useState(1)
    const partnerItems = [
        {
            key: '1',
            label: <CustomText className={`${selectedKey === 1 ? "!text-[#fff]" : "text-[#000]"} !text-[16px] !font-[400]`} text={"What's New Here"} />,
            children: <NotificationDetails/>,
        },
       
    ];
    const partnerChangeHandler = key => {
        setSelectedKey(key);
    };
    return(
        <>
         <div className="edit-profile py-[24px] ">
                <div className='ps-[50px] py-[40px]'>
                    <Avatar src={arrowleft} className='!size-[40px]'/>
                </div>

                <Tabs defaultActiveKey="1" items={partnerItems} onChange={(e) => { partnerChangeHandler(e) }} />
            </div>

        </>
    )
}
export default Notification;