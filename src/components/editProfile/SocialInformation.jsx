import CustomText from "../common/CustomText";
import { Image } from "antd";
import EditColoummn from "../common/EditColumn";
import editIcon from "../../assets/icons/edit.png"
const SocialInformation=()=>{
    return(
        <>
        <>
        <div className=" shadow-2xl px-[30px] py-[20px] rounded-b-xl">

            <div className="flex justify-end">
                <div className="flex gap-[10px]"> 
                <Image preview={false} className="!size-[24px]" src={editIcon}/>
                <CustomText className={"!text-[14px] !font-[300]"} text={"Edit"}/>
                </div>
            </div>
          
                <div>
                    <div className="flex flex-col gap-[24px] ">
                    <EditColoummn label={"Hometown"} data={"Mumbai, Maharashtra, India"}/>
                    <EditColoummn label={"Caste"} data={"Khatri"}/>
                    <EditColoummn label={"Gothra"} data={"Kashyap"}/>
                    <EditColoummn label={"Manglik"} data={"Non Manglik"}/>
                    </div>
                </div>
            </div>
        </>
        </>
    )
}
export default SocialInformation;