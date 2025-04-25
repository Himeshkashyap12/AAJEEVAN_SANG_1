import { Checkbox } from "antd";

const CustomCheckBox=({onchange,value})=>{
    return(
        <Checkbox onChange={onchange}>{value}</Checkbox>
    )
}
export default CustomCheckBox;