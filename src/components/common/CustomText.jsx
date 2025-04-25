import {  Typography } from 'antd';
const { Text } = Typography;


const CustomText=({text,className})=>{
    return(
        <>
        <Text  className={`text-[14px]  ${className}`}>{text}</Text>
        </>
    )
}
export default CustomText;