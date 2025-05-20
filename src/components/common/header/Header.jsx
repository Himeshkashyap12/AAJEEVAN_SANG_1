import { Avatar, Button, Image, Input } from "antd";
import image from "../../../assets/logo/ajeevanLogoHome.png"
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../CustomInput";
import CustomSearch from "../CustomSearch";
import { BellFilled, BellOutlined } from "@ant-design/icons";
import profileImage from "../../../assets/profile/profilePhoto.jpg"
import upgrade from "../../../assets/profile/crown.png"
import CustomModel from "../CustomModel";
import { useState } from "react";
import CommonSearch from "./CommonSearch";
const CustomHeader=()=>{
    const [openModel,setOpenModel]=useState(false)
    const navigate=useNavigate();
    return(
        <>
        <div className="fixed   bg-[#F81B3E]  w-full px-[34px] flex justify-between items-center  z-[9999]">
            <div className="logo flex  gap-[40px] items-center" >
                <div className="flex items-center">
                <Image preview={false} className="!w-[154px]" src={image}/>
                </div>
                <div className="flex items-center gap-[40px]">
                    <Link className="!text-[16px] !text-[#fff] font-[400]" to={"/"}>Home</Link>
                    <Link className="!text-[16px] !text-[#fff] font-[400]" to={"/discover"}>Discover</Link>
                    <Link className="!text-[16px] !text-[#fff] font-[400]" to={"/likes"}>Likes</Link>
                    <Link className="!text-[16px] !text-[#fff] font-[400]" to={"/message"}>Messages</Link>
                    <Link className="!text-[16px] !text-[#fff] font-[400]" to={"/plan"}>Plan</Link>
                </div>
            </div>
            <div className="menu flex gap-[30px] items-center">
                <div onClick={()=>{setOpenModel(true)}}>
                <CustomSearch/>
                </div>
                <Button onClick={()=>{navigate("/plan")}}  className="!rounded-full !text-[14px] !font-[600]"><Avatar className="!size-[18px]" src={upgrade}/>    Upgrade</Button>
            </div>
            <div className="profile-icon flex gap-3 items-center">
              <div  className="cursor-pointer" onClick={()=>navigate("/notification-page")} > <BellFilled style={{fontSize:"24px"}} /></div>
            <Avatar className="!size-[48px]" src={profileImage}/>
            </div>
        </div>
            <CustomModel width={"650px"} footer={false} setOpenModel={setOpenModel} openModel={openModel}  title={"Search"} modelBody={<CommonSearch/>}/>
        

        </>
    )
}
export default CustomHeader;