import { Input, InputAdornment } from "@mui/material";
import CustomText from "./CustomText";
const CustomInput=({placeholder,width,type,phoneNumber,onchange,className,required ,icon,name,value})=>{
    return(
      <div className="relative">
        <Input
        name={name}
        value={value}
        type={type}
        required
        onChange={onchange}
          id="input-with-icon-adornment"
          color="black"
          placeholder={placeholder??"Enter your text here"}
         className={`w-[350px] ${className}`}
          startAdornment={phoneNumber &&
            <InputAdornment className="ps-2" position="start">
              <CustomText className={"!text-[18px]"} text={icon?? "+ 91 |"}/>
            </InputAdornment>
          }
        />
       {required && <div className="absolute top-[10px] text-[red] right-0"> *</div>}
        </div>
    )
}
export default CustomInput;