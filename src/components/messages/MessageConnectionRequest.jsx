import { Avatar } from "antd"
import CustomText from "../common/CustomText"
import user from "../../assets/message/user.jpg"
import CustomButtonTwo from "../common/CustomButtonTwo"
import { CheckOutlined, CloseOutlined } from "@ant-design/icons"
const MessageConnectionRequest = ({connectionRequest=[2,2,3,4,4] }) => {
    return (
        <>
           {connectionRequest.map(()=>{
            return(
                <>
                 <div className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px]">
                <div className="flex gap-[16px] items-center">
                    <div className="">
                        <Avatar className="!size-[80px]" src={user} />
                    </div>
                    <div className="flex flex-col gap-[5px]">
                        <CustomText className={"text-[24px] font-[300]"} text={"Hasley Junior"} />
                        <CustomText className={"text-[20px] font-[300] !text-secondary "} text={"How are you?"} />
                    </div>
                </div>
                <div className="flex gap-[10px]">
                    <CustomButtonTwo className={"!py-[16px] px-[2px] !bg-[#D9D9D9]"} value={<div className="flex items-center gap-[8px]">
                        <CheckOutlined className="!rounded-full size-[24px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F2F2F2", color: "#F81B3E", fontWeight: "bold" }} />
                        <CustomText className={"!text-[16px] font-[300]  "} text={"Connected"} />
                    </div>} />
                    <CustomButtonTwo className={"!py-[16px] px-[2px] !bg-[#D9D9D9]"} value={<div className="flex items-center gap-[8px]">
                        <CloseOutlined className="!rounded-full size-[24px] flex justify-center items-center p-1" style={{ fontSize: "12px", background: "#F2F2F2", color: "#F81B3E", fontWeight: "bold" }} />
                        <CustomText className={"!text-[16px] font-[300]  "} text={"Reject"} />
                    </div>} />
                </div>

            </div>
                </>
            )
           })}
        </>
    )
}
export default MessageConnectionRequest;