import CustomText from "../common/CustomText";

const EditColoummn = ({label,data}) => {
    return (
        <div className="flex justify-start">

            <div className="w-[150px]">
                <CustomText className={"text-[14px] font-[300] !text-secondary"} text={label} />
            </div>
            <div  className="w-[800px]">
                <CustomText className={"!text-[16px] font-[300] "} text={data} />
            </div>
        </div>
    )
}
export default EditColoummn;