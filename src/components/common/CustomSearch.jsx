import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";

const CustomSearch=({className})=>{
    return(
        <>
                <Input prefix={<SearchOutlined />} placeholder="Search" className={`!rounded-full !w-[385px] !h-[34px] text-[14px] ${className}`}/>

        </>
    )
}
export default CustomSearch;