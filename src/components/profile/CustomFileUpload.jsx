import { Input } from "antd";
import { useRef, useState } from "react";

const CustomFileUpload=({})=>{
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const handleClick = (e) => {        
        if (fileInputRef.current) {
            fileInputRef.current.input?.click(); // Access the input element via 'input' property
          }
          
      };

      const handleChange = () => {
        // Get the selected file(s) when the input value changes
        const file = fileInputRef.current.input?.files[0];
        console.log(file);
         // Get the first selected file
        if (file) {
          setFileName(file.name); // Save the file name in state or do whatever you need with the file
        }
      };
      
    return(
        <>
        <div className="cursor-pointer" onClick={handleClick}>+</div>
        <Input
        ref={fileInputRef}
        className="!hidden"
        type="file"
        onChange={handleChange}
        />

        </>
    )
}
export default CustomFileUpload;