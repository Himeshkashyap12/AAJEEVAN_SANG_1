import CustomSwitch from "../CusomSwitch";
import CustomButton from "../CustomButton";
import CustomText from "../CustomText";

const NotificationSetting = () => {
  return (
    <div className="flex flex-col gap-[12px] py-[16px]">
      <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Connect"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Likes"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Call"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Messages"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Shortlist"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Recommendations"} />
        <CustomSwitch />
      </div>
       <div className="flex justify-between shadow-2xl roundd-xl py-[10px] px-[20px]  " style={{boxShadow: "0px 0px 4px 0px #00000014"}}> 
        <CustomText className={"!text-[16px] font-[400]"} text={"Based on your activity"} />
        <CustomSwitch />
      </div>
      <div className="flex  pt-[20px]  " > 
        <CustomButton className={"!text-[16px] font-[400] w-full" } value={"Continue"} />
      </div>
      
    </div>
  );
};
export default NotificationSetting;

