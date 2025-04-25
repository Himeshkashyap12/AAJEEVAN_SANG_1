import { Checkbox } from "antd";
import CustomText from "./CustomText";

const CustomCheckbox=({onchange})=>{
    return(
        <>
        <Checkbox onChange={onchange} ><CustomText className={"!text-secondary !text-[16px] font-[500] "} text={"Remember me"}/></Checkbox>
        </>
    )
}
export default CustomCheckbox;