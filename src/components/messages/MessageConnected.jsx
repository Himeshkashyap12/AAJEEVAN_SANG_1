import { Avatar } from "antd"
import CustomText from "../common/CustomText"
import user from "../../assets/message/user.jpg"
import { Link } from "react-router-dom"

const MessageConnected = ({connected=[1,2,3,3]}) => {
    return (
        <>
            {connected.map(()=>{
                return(
                    <Link to={`/message/1`} className="flex justify-between items-center border-b border-[#EFF0F7] pb-[24px]">
                    <div className="flex gap-[16px] items-center">
                        <div className="">
                            <Avatar className="!size-[80px]" src={user} />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <CustomText className={"text-[24px] font-[300]"} text={"Hasley Junior"} />
                            <CustomText className={"text-[20px] font-[300] !text-secondary "} text={"How are you?"} />
                        </div>
                    </div>
                    <div>
                        <CustomText className={"text-[20px] font-[300] !text-secondary"} text={"2 mins ago"} />
                    </div>
                </Link>
                )
            })}
        </>
    )
}

export default MessageConnected;