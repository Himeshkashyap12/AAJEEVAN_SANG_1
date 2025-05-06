import { Avatar, Image, Progress } from "antd";
import profile from "../../assets/profile/profilePhoto.jpg"
import CustomText from "./CustomText";
import CustomButtonTwo from "./CustomButtonTwo";
import { BellFilled, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import partner from "../../assets/icons/partner.png"
import language from "../../assets/icons/language.png"
import help from "../../assets/icons/help.png"
const CustomSideProfile = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className="xl:w-[25%] w-[40%] mx-auto shadow-2xl rounded-xl  right-[50px] mt-[40px] p-[24px] ">
                <div className="flex flex-col  gap-[24px]">
                    <div className="flex flex-col justify-center items-center">
                        <Avatar className="!size-[100px]" src={profile} />
                        <CustomText className={["!text-[24px] font-[500]"]} text={"Bablu Saxena"} />
                    </div>
                    <div className="flex flex-col   gap-[16px] items-center justify-center ">
                        <CustomText className={"text-secondary"} text={"#9485748"} />
                        <CustomButtonTwo className={"!w-[100px] !bg-[#FBD100] !text-black !border-none font-[300]"} value={<><span>Boost</span> <span className="font-[500]">2/2</span></>} />
                    </div>
                    <div className="flex justify-between items-center px-[24px] !bg-[#F81B3E] py-[20px] !rounded-2xl ">
                        <div className="flex gap-[16px] items-center ">
                            <Progress className="" size={"small"} strokeColor={"#FBD100"} type="circle" percent={75} />
                            <CustomText className={"text-[12px] !text-[#fff] font-[400]"} text={"Complete your profile "} />
                        </div>
                        <div>
                            <CustomButtonTwo onclick={()=>{navigate("edit-profile")}} value={"Edit Profile"} />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-[24px] pt-[20px] ">
                    <CustomText className={"!text-secondary text-[12px] font-[300]"} text={"Account"} />
                    <div onClick={()=>{navigate("/partner-preference")}}  className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px] cursor-pointer">
                        <div className="flex gap-[16px] items-center">
                            <div className="flex justify-center items-center bg-[#FDCED5] rounded-full size-[50px]">
                                 <Image src={partner} className="!w-[20px] !h-[30px] object-fit"/>
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <CustomText className={"text-[14px] font-[500]"} text={"Partner Preference"} />
                                <CustomText className={"text-[12px] font-[400] !text-secondary "} text={"Name, username & date of birth"} />
                            </div>
                        </div>
                        <div><RightOutlined /></div>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px] cursor-pointer">
                        <div className="flex gap-[16px] items-center">
                            <div className="flex justify-center items-center bg-[#FDCED5] rounded-full size-[50px]">
                                 <BellFilled style={{ color: "#F81B3E", fontSize: "24px" }} />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <CustomText className={"text-[14px] font-[500]"} text={"Notification Setting"} />
                                <CustomText className={"text-[12px] font-[400] !text-secondary "} text={"Name, username & date of birth"} />
                            </div>
                        </div>
                        <div><RightOutlined /></div>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px] cursor-pointer">
                        <div className="flex gap-[16px] items-center">
                            <div className="flex justify-center items-center bg-[#FDCED5] rounded-full size-[50px]">
                            <Image src={language} className="!w-[24px] !h-[24px] object-fit"/>

                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <CustomText className={"text-[14px] font-[500]"} text={"Language"} />
                                <CustomText className={"text-[12px] font-[400] !text-secondary "} text={"Name, username & date of birth"} />
                            </div>
                        </div>
                        <div><RightOutlined /></div>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px] cursor-pointer">
                        <div className="flex gap-[16px] items-center">
                            <div className="flex justify-center items-center bg-[#FDCED5] rounded-full size-[50px]">
                            <Image src={help} className="!w-[24px] !h-[24px] object-fit"/>

                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <CustomText className={"text-[14px] font-[500]"} text={"Help Center"} />
                                <CustomText className={"text-[12px] font-[400] !text-secondary "} text={"Name, username & date of birth"} />
                            </div>
                        </div>
                        <div><RightOutlined /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CustomSideProfile;