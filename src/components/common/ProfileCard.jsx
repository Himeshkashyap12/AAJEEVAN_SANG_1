import { Avatar, Col, Image, Row } from "antd";
import profileImage from "../../assets/profileCardImages/profileCardMain.jpg"
import CustomText from "./CustomText";
import verify from "../../assets/icons/verify.png"
import personalIcon from "../../assets/icons/personalCard.png"
import heart from "../../assets/icons/heart.png"
import check from "../../assets/icons/check.png"
import star from "../../assets/icons/star.png"
import call from "../../assets/icons/call.png"
import message from "../../assets/icons/message.png"
const ProfileCard = () => {
    return (
        <>
            <Row className=" border border-[#FDCED5] rounded-2xl">
                <Col span={6}>
                    <div className="">
                        <Image
                            className="h-full w-full !object-cover rounded-tl-xl rounded-bl-xl"
                            preview={false}
                            src={profileImage}
                        />
                    </div>
                </Col>
                <Col span={16} className="ps-10 py-5 " >
                    <div className="flex flex-col gap-[12px] ">
                        <div className="flex flex-col  ">
                            <div className="relative flex gap-2 items-center">
                                <CustomText text={"Bobby Selena , 25"} className={"!text-[24px] !font-[500]"} />
                                <Avatar className="!size-[20px]" src={verify} />
                                <div className="absolute -right-25 top-0 ps-[40px] pe-[34px] rounded-l-full py-[10px] flex gap-[36px] items-center" style={{ background: "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)" }}>
                              {/* <CustomText text={"Profile Managed by Parents"} className={"!text-[12px] font-[300] !text-[#fff]"}/> */}
                              <Image preview={false} src={call} className="!size-[24px]"/>

                              <Image preview={false} src={message}  className="!size-[24px]"/>
                            </div>
                            </div>
                            <div className="flex items-center gap-2  ">
                                <CustomText text={"Last seen 12 min ago"} className={"!text-[12px] !font-[300] text-[#444]"} />
                                <div className="!size-[10px] rounded-full bg-[#34C759]"></div>
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-[10px] ">
                            <div className="flex gap-2 items-center">
                                <Image preview={false} src={personalIcon} className="!size-[24px] " />
                                <CustomText text={"5’0”  | 60 Kg | Baharaman, Hindu  "} className={"!text-[14px] !font-[400]"} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image preview={false} src={personalIcon} className="!size-[24px] " />

                                <CustomText text={"Govt. - Professor/Lecturer"} className={"!text-[14px] !font-[400]"} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image preview={false} src={personalIcon} className="!size-[24px] " />

                                <CustomText text={"1-2 LPA"} className={"!text-[14px] !font-[400]"} />
                            </div>
                            <div className="flex gap-2 items-center">
                                <Image preview={false} src={personalIcon} className="!size-[24px] " />

                                <CustomText text={"Lucknow, UP"} className={"!text-[14px] !font-[400]"} />
                            </div>
                            <div className="absolute -left-10 -bottom-11 ps-[40px] pe-[34px] rounded-r-full py-[5px]" style={{ background: "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)" }}>
                             <CustomText text={"Profile Managed by Parents"} className={"!text-[12px] font-[300] !text-[#fff]"}/>
                            </div>
                           
                        </div>
                    </div>
                    <div className="flex flex-col gap-[24px] pt-[50px] w-[400px]">
                        <div className="flex  flex-col gap-[12px] w-full">
                            <CustomText className={"text-[14px] font-[500]"} text={"About me"} />
                            <CustomText className={"text-[14px ] font-[400]"} text={"Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections. Lorem ipsum dolor sit amet consectetur. Adipiscing ipsum duis ante enim id semper."} />
                        </div>
                    </div>
                    <div className="flex justify-center pt-[20px]">
                        <div className="flex gap-[60px] py-[12px] px-[10px] rounded-full" style={{ background: "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)" }}>
                            <div className="flex items-center gap-[12px] pe-[30px] border-r border-[#EE829C]">
                                <Avatar src={check} className="!size-24px" />
                                <CustomText className={"!text-[#fff] text-[10px] font-[400]"} text={"Connect"} />
                            </div>
                            <div className="flex items-center gap-[12px] pe-[30px] border-r border-[#EE829C]">
                                <Avatar src={heart} className="!size-24px" />
                                <CustomText className={"!text-[#fff] text-[10px] font-[400]"} text={"Like"} />
                            </div>
                            <div className="flex items-center gap-[12px]">
                                <Avatar src={star} className="!size-24px" />
                                <CustomText className={"!text-[#fff] text-[10px] font-[400]"} text={"Shortlist"} />
                            </div>
                        </div>
                    </div>

                </Col>
                <Col span={8}></Col>


            </Row>
        </>
    )
}
export default ProfileCard;