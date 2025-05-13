import CustomText from "../common/CustomText";
import { Image } from "antd";
import EditColoummn from "../common/EditColumn";
import editIcon from "../../assets/icons/edit.png"
const HabitInformation = () => {
    return (
        <>
                    <div className="shadow-2xl  px-[30px] py-[20px] rounded-b-xl">

                <div className="flex justify-end">
                    <div className="flex gap-[10px]">
                        <Image preview={false} className="!size-[24px]" src={editIcon} />
                        <CustomText className={"!text-[14px] !font-[300]"} text={"Edit"} />
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-[24px] ">
                        <EditColoummn label={"Eating Habits"} data={"Veg"} />
                        <EditColoummn label={"Smoking Habits"} data={"Never"} />
                        <EditColoummn label={"Drinking Habits"} data={"Never"} />
                        <EditColoummn label={"Spoken Languages"} data={"Hindi (Mother Tongue)"} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default HabitInformation;