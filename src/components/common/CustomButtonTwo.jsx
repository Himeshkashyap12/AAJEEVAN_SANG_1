import { Button } from "antd";

const CustomButtonTwo=({value ,onclick,className})=>{
    return(
        <>
        <Button
        onClick={onclick}
        className={`text-white !rounded-full !py-5 ${className}`}
      >
        {value}
      </Button>
        </>
    )
}
export default CustomButtonTwo;