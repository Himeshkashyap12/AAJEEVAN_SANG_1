import React, { useState } from 'react';
import { Avatar, Tabs } from 'antd';
import "./editProfile.css"
import CustomText from '../common/CustomText';
import { ArrowLeftOutlined } from '@ant-design/icons';
import arrowleft from "../../assets/icons/arrowleft.png"
import BasicInformation from './BasicInformation';
import FamilyInformation from './FamilyInformation';
import SocialInformation from './SocialInformation';
import HabitInformation from './HabitInformation';
const EditProfile = () => {
    const [selectedKey, setSelectedKey] = useState(1)
    const editItems = [
        {
            key: '1',
            label: <CustomText className={`${selectedKey === 1 ? "!text-[#fff]" : "text-[#000]"} !text-[16px] !font-[400]`} text={"Basic & Personal Information"} />,
            children: <BasicInformation/>,
        },
        {
            key: '2',
            label: <CustomText className={`${selectedKey === 2 ? "!text-[#fff]" : "text-[#000]"} !text-[16px] !font-[400]`} text={"Family  Information"} />,
            children: <FamilyInformation/>,
        },
        {
            key: '3',
            label: <CustomText className={`${selectedKey === 3 ? "!text-[#fff]" : "text-[#000]"} !text-[16px] !font-[400]`} text={"Social Information"} />,
            children: <SocialInformation/>,
        },

        {
            key: '4',
            label: <CustomText className={`${selectedKey === 4 ? "!text-[#fff]" : "text-[#000]"} !text-[16px] !font-[400]`} text={"Habit & Lifestyle  Information"} />,
            children:<HabitInformation/>,
        },
    ];
    const editChangeHandler = key => {
        setSelectedKey(key);
    };
    return (
        <>
            <div className="edit-profile py-[24px] ">
                <div className='ps-[50px] py-[40px]'>
                    <Avatar src={arrowleft} className='!size-[40px]'/>
                </div>

                <Tabs defaultActiveKey="1" items={editItems} onChange={(e) => { editChangeHandler(e) }} />
            </div>
        </>
    )
}
export default EditProfile;