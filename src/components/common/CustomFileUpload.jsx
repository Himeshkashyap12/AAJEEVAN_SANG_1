import { Image, Input } from "antd";
import { useRef, useState } from "react";

const CustomFileUpload=({})=>{
    const fileInputRef = useRef(null);
    const [fileName, setFileName] = useState('');
    const [preview,setPreview]=useState("");
    const handleClick = (e) => {        
        if (fileInputRef.current) {
            fileInputRef.current.input?.click(); // Access the input element via 'input' property
          }
          
      };

      const handleChange = () => {
        // Get the selected file(s) when the input value changes
        const file = fileInputRef.current.input?.files[0];
         // Get the first selected file
        if (file) {
          setFileName(file.name); // Save the file name in state or do whatever you need with the 
          setPreview(file)
        }
      };
      
    return(
        <>
       {fileName==='' ? <><div className="cursor-pointer" onClick={handleClick}>+</div>
        <Input
        ref={fileInputRef}
        className="!hidden"
        type="file"
        onChange={handleChange}
        /></>:<Image preview={false} src={preview}/>}

        </>
    )
}
export default CustomFileUpload;