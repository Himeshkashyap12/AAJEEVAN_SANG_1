import CustomText from "../common/CustomText";
import profilePhoto from "../../assets/profile/profilePhoto.jpg"
import { Avatar, Image } from "antd";
import EditColoummn from "./EditColumn";
import editIcon from "../../assets/icons/edit.png"
const FamilyInformation=()=>{
    return(
        <>
                <div className=" w-[75%] shadow-2xl mx-[50px] px-[30px] py-[20px] rounded-b-xl">

            <div className="flex justify-end">
                <div className="flex gap-[10px]"> 
                <Image preview={false} className="!size-[24px]" src={editIcon}/>
                <CustomText className={"!text-[14px] !font-[300]"} text={"Edit"}/>
                </div>
            </div>
          
                <div>
                    <div className="flex flex-col gap-[24px] ">
                    <EditColoummn label={"Father’s name"} data={"Suraj singh"}/>
                    <EditColoummn label={"Father’s occupation "} data={"Government sector"}/>
                    <EditColoummn label={"Mother’s name"} data={"Savitri singh"}/>
                    <EditColoummn label={"Mother’s occupation"} data={"Housewife"}/>
                    <EditColoummn label={"Siblings"} data={"2"}/>
                    <EditColoummn label={"Family Income"} data={"INR 7 Lakh to 10 Lakh"}/>
                   
                      
                    </div>
                </div>
            </div>
        </>
    )
}
export default FamilyInformation;