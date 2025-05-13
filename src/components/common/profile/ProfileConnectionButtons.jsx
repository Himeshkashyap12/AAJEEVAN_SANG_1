import { Avatar } from "antd";
import CustomText from "../CustomText";
import heart from "../../../assets/icons/heart.png";
import check from "../../../assets/icons/check.png";
import star from "../../../assets/icons/star.png";
const ProfileConnectionButton=()=>{
    return(
        <>
          <div className="flex justify-center pt-[20px]">
            <div
              className="flex gap-[60px] py-[12px] px-[10px] rounded-full"
              style={{
                background: "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)",
              }}
            >
              <div className="flex items-center gap-[12px] pe-[30px] border-r border-[#EE829C]">
                <Avatar src={check} className="!size-24px" />
                <CustomText
                  className={"!text-[#fff] text-[10px] font-[400]"}
                  text={"Connect"}
                />
              </div>
              <div className="flex items-center gap-[12px] pe-[30px] border-r border-[#EE829C]">
                <Avatar src={heart} className="!size-24px" />
                <CustomText
                  className={"!text-[#fff] text-[10px] font-[400]"}
                  text={"Like"}
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <Avatar src={star} className="!size-24px" />
                <CustomText
                  className={"!text-[#fff] text-[10px] font-[400]"}
                  text={"Shortlist"}
                />
              </div>
            </div>
          </div>
        </>
    )
}
export default ProfileConnectionButton;