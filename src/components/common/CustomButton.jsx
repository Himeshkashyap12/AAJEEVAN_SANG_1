import { Button } from "antd";

const CustomButton = ({ value ,onclick,className,disabled}) => {
  return (
    <>
      <Button
      disabled={disabled}
        onClick={onclick}
        className={`!text-white !rounded-full !py-5 ${className}`}
        style={!disabled?{
          background:"linear-gradient(130.39deg, #F81B3E 40.58%, #4E6881 130.88%)"}:{background:"#00000066"}}
      >
        {value}
      </Button>
    </>
  );
};
export default CustomButton;
