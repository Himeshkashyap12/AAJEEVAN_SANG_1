import CustomText from "../../CustomText";
import EditColoummn from "../../EditColumn";

const LifeStyle=()=>{
    return(
        <div className="life-style">
        <div
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="py-2 rounded-full w-[140px] flex justify-center items-center"
        >
          <CustomText text={"6. LIFESTYLE"} />
        </div>
        <div className="ps-[140px]">
                <CustomText className={"!text-[18px] font-[400] !text-[#201913]"} text={"Habit & Lifestyle  Information"}/>
                <div className="flex flex-col gap-[10px] py-[12px]">
                    <EditColoummn label={"Eating Habits"} data={"Veg"}/>
                    <EditColoummn label={"Smoking Habits"} data={"Never"}/>
                    <EditColoummn label={"Drinking Habits"} data={"Never"}/>
                    <EditColoummn label={"Spoken Languages"} data={"Hindi (Mother Tongue)"}/>
                </div>
                </div>
      </div>
    )
}
export default LifeStyle;