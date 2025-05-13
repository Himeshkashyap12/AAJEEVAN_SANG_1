import React, { useState, useRef } from 'react';
// import { Picker } from 'emoji-mart';
import CustomInput from "../../common/CustomInput"
import Webcam from "react-webcam";
const ChatMessageBox=()=>{
        const [message, setMessage] = useState('');
        const webcamRef = useRef(null);
        const [camera,setCamera]=useState(true)
       
      
        const handleSend = () => {
          console.log('Sending:', message);
          setMessage('');
        };
      
        const capturePhoto = () => {
            setCamera(true)
          const imageSrc = webcamRef.current.getScreenshot();
          console.log('Captured image:', imageSrc);
          // send imageSrc to backend or display
        };

    return(
        <>
        {/* <div className="flex justify-center w-full items-end h-[100%]">
        <div className="p-4  flex !w-[100%]">
      <div className="flex items-center gap-2"> */}
      
        {/* <CustomInput
        //   value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={1}
          className="!!w-[880px] border  !rounded-full"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white px-3 py-1 rounded">
          Send
        </button>
      </div> */}

      {/* <div className="space-y-2"> */}
       {/* <Webcam
          audio={true}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-48 h-36 rounded"
        /> */}
        {/* <button onClick={()=>{capturePhoto()}} className="">
          Capture Photo
        </button> */}
      {/* </div>
    </div>
        </div> */}
        </>
    )
}
export default ChatMessageBox;