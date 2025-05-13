import { Avatar, Col, Image, Row } from "antd";
import user from "../../assets/message/user.jpg"
import CustomText from "../common/CustomText";
import { Link } from "react-router-dom";
import CustomSearch from "../common/CustomSearch";
import CustomButtonTwo from "../common/CustomButtonTwo";
import { useState } from "react";
import AllCalls from "./AllCalls";
import CustomSlider from "../common/CustomSlider";
const MyCalls = ({ messageConnection=[1,2,3,4,5,5,65,6,66,7,77,23,34,]}) => {
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
                {/* <div className="flex gap-[10px] !overflow-x-hidden">
                    {messageConnection.map(() => {
                        return (
                            <>
                                <div className="relative flex flex-col justify-center items-center">
                                    <Image
                                        preview={false}
                                        className="rounded-full  object-cover !size-[80px]  border border-[#F81B3E]"
                                        src={user}
                                    />
                                    <CustomText className={"!text-[14px] font-[300]"} text={"Hasley"} />
                                    <div className="size-[16px] bg-[#00EAA5] rounded-full absolute bottom-6  right-1"   ></div>
                                </div>
                            </>
                        )
                    })}
                </div> */}
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
                    <CustomButtonTwo onclick={()=>setConnection("allCalls")} value={"All Calls"} />
                    <CustomButtonTwo onclick={()=>setConnection("missedCalls")} value={"Missed Calls"} />
                </div>
                <div className="h-[450px] overflow-auto">
                     <AllCalls/>
               </div>
                
            </div>

        </>
    )
}
export default MyCalls;