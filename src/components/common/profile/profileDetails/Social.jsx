import CustomText from "../../CustomText";
import EditColoummn from "../../EditColumn";

const Social=()=>{
    return(
        <div className="social relative w-[50%]">
              <div
                style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
                className="py-2 rounded-full w-[140px] flex justify-center items-center"
              >
                <CustomText text={"4. SOCIAL"} />
              </div>
              <div className="flex flex-col gap-[10px] py-[12px] ps-[140px]">
                    <EditColoummn label={"Hometown"} data={"Mumbai, Maharashtra, India"}/>
                    <EditColoummn label={"Caste"} data={"Khatri"}/>
                    <EditColoummn label={"Gothra"} data={"Kashyap"}/>
                    <EditColoummn label={"Manglik"} data={"Non Manglik"}/>
                </div>
                <div className="absolute right-0 top-22 ps-[40px] pe-[34px] rounded-l-full py-[10px] flex gap-[36px] items-center" style={{ background: "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)" }}>
                             <CustomText className={"!text-[#fff] !text-[12px] font-[300]"} text={"Caste no bar"}/>
                            </div>
            </div>
    )
}
export default Social;