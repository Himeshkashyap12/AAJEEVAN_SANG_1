import CustomText from "../common/CustomText";
import profilePhoto from "../../assets/profile/profilePhoto.jpg"
import { Avatar, Image } from "antd";
import EditColoummn from "../common/EditColumn";
import editIcon from "../../assets/icons/edit.png"
const BasicInformation = () => {
    return (
        <div className="  shadow-2xl px-[30px] py-[20px] rounded-b-xl">
            <div className="flex justify-end ">
                <div className="flex gap-[10px]"> 
                <Image preview={false} className="!size-[24px]" src={editIcon}/>
                <CustomText className={"!text-[14px] !font-[300]"} text={"Edit"}/>
                </div>
            </div>
            <div className="flex flex-col gap-[24px]">
                <CustomText className={"!text-[14px] !font-[300] !text-secondary"} text={"Photos"} />
                <div className="flex gap-[20px]">
                    {[1, 2, 3, 4, 5, 6,0,0].map(() => {
                        return (
                            <Image preview={false} className="object-cover !size-[120px] rounded-xl"  src={profilePhoto}/>
                        )
                    })}
                </div>
                <div>
                    <div className="flex flex-col gap-[24px] pt-[24px]">
                    <EditColoummn label={"About Me"} data={"01, JaHi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections. Lorem ipsum dolor sit amet consectetur. Adipiscing ipsum duis ante enim id semper.n, 2000"}/>
                    <EditColoummn label={"Age"} data={"25 Years"}/>
                    <EditColoummn label={"Height"} data={"5’2”"}/>
                    <EditColoummn label={"Weight"} data={"60 Kg"}/>
                    <EditColoummn label={"Date of Birth"} data={"1 Jan, 2000"}/>
                    <EditColoummn label={"Education"} data={"B.Tech”    |   IIT P"}/>
                    <EditColoummn label={"Profession"} data={"Manager    |    Private"}/>
                    <EditColoummn label={"Religion"} data={"Hindu | Khatri"}/>
                    <EditColoummn label={"Profile managed By"} data={"Parents"}/>
                    <EditColoummn label={"Marital Status"} data={"Never Married"}/>
                    <EditColoummn label={"Lives In"} data={"Lujcknow, UP"}/>
                    <EditColoummn label={"Annual Income"} data={"3-4 LPA"}/>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BasicInformation;