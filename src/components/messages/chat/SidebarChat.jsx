import { Avatar } from "antd";
import CustomSearch from "../../common/CustomSearch";
import CustomText from "../../common/CustomText";
import profile from "../../../assets/profile/mesageProfile.jpg"
const SidebarChat=()=>{
    return(
        <div className="sidebar-chat px-[16px] py-[20px] flex flex-col gap-[40px]">
        <div className="search flex justify-center">
        <CustomSearch className={"!bg-[#E6E6E6] !w-[332px] "}/>
        </div>
        <div className="chat flex flex-col gap-[40px]">
          {[1,2,3,4,5].map((item,idx)=>{
            return(
                <div className="flex justify-between ">
                    <div className="flex gap-[16px] items-center">
                        <div className="!size-[50px]"><Avatar className="!w-full !h-full" src={profile}/></div>
                        <div className="flex flex-col items-start gap-[5x]"> 
                            <CustomText className={"!text-[#011627] !text-[16px] font-[400]"} text={"Jessica Drew"}/>
                            <CustomText className={"!text-secondary !text-[14px] font-[400]"} text={"Ok, see you later"}/>
                        </div>
                    </div>
                    <div className="flex flex-col  items-center">
                    <CustomText className={"!text-[#011627] !text-[16px] font-[400]"} text={"18:30"}/>
                    <div className="!bg-[#78E378] rounded-full size-[20px] flex justify-center items-center "><CustomText className={"!text-[#fff]  !text-[14px] font-[400]"} text={"2"}/></div>
                    </div>
                </div>
            )})}
        </div>
        </div>
    )
}
export default SidebarChat;