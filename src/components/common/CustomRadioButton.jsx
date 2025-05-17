import { Radio } from "antd";

const CustomRadioButton=({option,onchange,value})=>{
    return(
        <>
        <Radio.Group
      onChange={onchange}
      value={value}
      options={option}
    />
        </>
    )
}
export default CustomRadioButton;