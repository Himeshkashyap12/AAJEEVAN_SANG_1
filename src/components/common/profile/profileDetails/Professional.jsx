import CustomText from "../../CustomText";
import EditColoummn from "../../EditColumn";

const Proffessional=()=>{
    return(
        <div className="professional">
        <div
          style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
          className="py-2 rounded-full w-[140px] flex justify-center items-center"
        >
          <CustomText text={"5. PROFESSIONAL"} />
        </div>
        <div className="ps-[140px]">
                <CustomText className={"!text-[18px] font-[400] !text-[#201913]"} text={"Educational  & Employment  Information"}/>
                <div className="flex flex-col gap-[10px] py-[12px]">
                    <EditColoummn label={"Highest Education"} data={"Masters"}/>
                    <EditColoummn label={"Institute name"} data={"5’2”"}/>
                    <EditColoummn label={"Weight"} data={"Khatri"}/>
                    <EditColoummn label={"Gothra"} data={"Kashyap"}/>
                    <EditColoummn label={"Job "} data={"Non Manglik"}/>
                    <EditColoummn label={"Annual Income"} data={"7 -9 LPA"}/>
                </div>
                </div>
      </div>
    )
}
export default Proffessional;