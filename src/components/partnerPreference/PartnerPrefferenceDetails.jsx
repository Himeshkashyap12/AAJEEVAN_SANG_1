import CustomText from "../common/CustomText";
import profilePhoto from "../../assets/profile/profilePhoto.jpg"
import { Avatar, Image } from "antd";
import editIcon from "../../assets/icons/edit.png"
import PartnerColumn from "./PartnerColumn";
const PartnerPreferenceDetails = () => {
    return (
        <div className="shadow-2xl  px-[30px] py-[20px] rounded-b-xl">
            <div className="flex justify-end ">
                <div className="flex gap-[10px]">
                    <Image preview={false} className="!size-[24px]" src={editIcon} />
                    <CustomText className={"!text-[14px] !font-[300]"} text={"Edit"} />
                </div>
            </div>

            <div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-b !border-[#929292] pb-[24px] w-[50%]">
                    <CustomText className={"!text-[16px] !font-[400]"} text={"Partner’s Basics Details"} />
                    <div className="flex flex-col gap-[16px]">
                        <PartnerColumn label={"Age"} data={"25-40  Years of Age"} />
                        <PartnerColumn label={"Country/City"} data={"4’5 - 5’2”   "} />
                        <PartnerColumn label={"Created By"} data={"Parents"} />
                        <PartnerColumn label={"Marital Status"} data={"Never Married"} />
                    </div>
                </div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-b !border-[#929292] pb-[24px] w-[50%]">
                    <CustomText className={"!text-[16px] !font-[400]"} text={"Partner’s Education Details"} />
                    <div className="flex flex-col gap-[16px]">
                        <PartnerColumn label={"Highest Degree"} data={"Government sector"} />
                        <PartnerColumn label={"Well Known Colleges"} data={"1 Jan, 2000"} />
                        <PartnerColumn label={"Occupation"} data={"Housewife"} />
                        <PartnerColumn label={"Income"} data={"INR 7 Lakh to 10 Lakh"} />
                    </div>
                </div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-b !border-[#929292] pb-[24px] w-[50%]">
                    <CustomText className={"!text-[16px] !font-[400]"} text={"Partner’s Education Details"} />
                    <div className="flex flex-col gap-[16px]">
                        <PartnerColumn label={"Religion"} data={"Hindu | Khatri"} />
                        <PartnerColumn label={"Caste"} data={"Kashyap"} />
                        <PartnerColumn label={"Mother Tongue"} data={"Hindi"} />
                        <PartnerColumn label={"Manglik"} data={"Manglik"} />
                        <PartnerColumn label={"Family Lives in"} data={"Heaven"} />
                    </div>
                </div>
                <div className="flex flex-col gap-[24px] pt-[24px] border-b !border-[#929292] pb-[24px] w-[50%]">
                    <CustomText className={"!text-[16px] !font-[400]"} text={"Partner’s Education Details"} />
                    <div className="flex flex-col gap-[16px]">
                        <PartnerColumn label={"Eating Habits"} data={"Vegan"} />
                        <PartnerColumn label={"Smoking Habits"} data={"Smoker"} />
                        <PartnerColumn label={"Drinking Habits"} data={"Alcoholic"} />
                        <PartnerColumn label={"Marital Status"} data={"Never Married"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PartnerPreferenceDetails;