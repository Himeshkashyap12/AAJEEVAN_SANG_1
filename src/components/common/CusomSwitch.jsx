import { Switch } from "antd";
import "../common/common.css"
const CustomSwitch=(onchange,)=>{
    return(
        <div className="switch">
        <Switch  defaultChecked onChange={onchange}  />
        </div>
    )
}
export default CustomSwitch;