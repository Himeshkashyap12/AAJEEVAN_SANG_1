import { Button } from "antd";

const CustomButton = ({ value ,onclick,className,disabled}) => {
  return (
    <>
      <Button
      disabled={disabled}
        onClick={onclick}
        className={`!text-white !rounded-full  border-none !py-5 ${className}`}
        style={!disabled?{
          background:"linear-gradient(130.39deg, #F81B3E 40.58%, #4E6881 130.88%),linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"}:{background:"#00000066"}}
      >
        {value}
      </Button>
    </>
  );
};
export default CustomButton;


