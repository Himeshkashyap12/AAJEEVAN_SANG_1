import { Avatar } from "antd";
import CustomText from "../../common/CustomText";
import profile from "../../../assets/profile/mesageProfile.jpg"
import call from "../../../assets/chat/call.png"
import video from "../../../assets/chat/video.png"
import option from "../../../assets/chat/option.png"
const HeaderChat=()=>{ 
    return(
         <div className="flex justify-between h-[60px] ">
                    <div className="flex gap-[16px] items-center  ">
                        <div className="!size-[40px] flex items-center"><Avatar className="!w-full !h-full" src={profile}/></div>
                        <div className="flex flex-col items-start justify-center gap-[5x]"> 
                            <CustomText className={"!text-[#011627] !text-[16px] font-[400]"} text={"David Moore"}/>
                            <CustomText className={"!text-secondary !text-[14px] font-[400]"} text={"last seen 5 mins ago"}/>
                        </div>
                    </div>
                    <div className="flex flex-col  items-center">                    
                    <div className="flex gap-[16px] items-center">
                        <div className="!size-[32px]"><Avatar src={call} className="w-full h-full"/></div>
                        <div className="!size-[32px]"><Avatar src={video} className="w-full h-full"/></div>
                        <div className="!size-[32px]"><Avatar src={option} className="w-full h-full"/></div>
                    </div>
                    </div>
                </div>

    )
}
export default HeaderChat;