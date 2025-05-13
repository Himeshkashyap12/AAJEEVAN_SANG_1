import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const CustomSearch=({className})=>{
    return(
        <><div className="!w-[385px]">
                <Input prefix={<SearchOutlined />} placeholder="Search" className={`!rounded-full !h-[34px] text-[14px] ${className}`}/>
                </div>

        </>
    )
}
export default CustomSearch;