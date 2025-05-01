import CustomText from "../common/CustomText";

const PartnerColumn = ({label,data}) => {
    return (
        <div className="flex flex-col gap-[16px]  justify-start">
                <CustomText className={"text-[14px] font-[300] !text-secondary"} text={label} />
                <CustomText className={"!text-[16px] font-[300] "} text={data} />
        </div>
    )
}
export default PartnerColumn;