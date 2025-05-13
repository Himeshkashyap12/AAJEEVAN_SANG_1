import { Avatar } from "antd";
import CustomText from "../common/CustomText";
import profilePhoto from "../../assets/profile/profilePhoto.jpg" 
import CustomButtonTwo from "../common/CustomButtonTwo";
const NotificationDetails = () => {
    return (
        <div className="  shadow-2xl px-[30px] py-[20px] rounded-b-xl flex flex-col gap-[24px]">
           
    
          {[1,2,3].map(()=>{
            return(
                <>
                <div className="flex justify-between  bg-[#FDCED5] px-[24px] py-[20px] pb-[24px] rounded-xl">
                    <div className="flex gap-[16px] items-center">
                        <div className="">
                            <Avatar src={profilePhoto} className="!size-[80px]"  />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <CustomText className={"!text-[18px] font-[400]"} text={"Connect with Rachna Verma and other Match of the Day profiles"} />
                            <CustomButtonTwo className={"!w-[120px] !bg-[#F81B3E] !text-[#fff] border-0"} value={"View Matches"}/>
                        </div>
                    </div>
                    <div>
                        <CustomText className={"!text-[20px] !font-[500]"} text={"20h"} />
                    </div>
                </div>
                </>
            )
          }) }
        </div>
    )
}
export default NotificationDetails;