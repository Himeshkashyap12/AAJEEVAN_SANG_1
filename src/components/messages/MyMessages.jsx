import { Avatar, Col, Image, Row } from "antd";
import user from "../../assets/message/user.jpg"
import CustomText from "../common/CustomText";
import { Link } from "react-router-dom";
import CustomSearch from "../common/CustomSearch";
import CustomButtonTwo from "../common/CustomButtonTwo";
import MessageConnected from "./MessageConnected";
import { useState } from "react";
import MessageConnectionRequest from "./MessageConnectionRequest";
import CustomSlider from "../common/CustomSlider";
const MyMessages = ({ messageConnection }) => {
    const [connection,setConnection]=useState("connected")
    const profileData=[
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user}, 
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user},
        {img:user}
    ]
    return (
        <>
            <div className="flex flex-col gap-[20px] ">

                <div className="flex justify-between items-center pb-[16px]">
                    <div className="flex flex-col gap-[5px]">
                        <CustomText className={"!text-[24px] font-[400]"} text={"Best Matches"} />
                        <CustomText className={"!text-[16px] font-[400] !text-secondary"} text={"Initiate a chat with your best matches to get faster response"} />
                    </div>
                    <Link className={"!text-[14px] font-[300] !text-secondary"}>View All</Link>
                </div>

                    <div className="max-w-[1400px]  pe-[50px]  ">
              <CustomSlider
                slides={profileData}
                SlideDataCount={12}
                centerMode={true}
                profileMessage
              />
                </div>
                <div className="!w-[70%]">
                    <CustomSearch className={"!w-[700px] !bg-[#E6E6E6]"} />
                </div>
                <div className="flex gap-[20px]">
                    <CustomButtonTwo onclick={()=>setConnection("connected")} value={"Connected"} />
                    <CustomButtonTwo onclick={()=>setConnection("connectionRequest")} value={"Connect Request"} />
                </div>
                <div className="h-[450px] overflow-auto">
               {connection==="connected"? <MessageConnected/>:<MessageConnectionRequest/>}
               </div>
                
            </div>

        </>
    )
}
export default MyMessages;