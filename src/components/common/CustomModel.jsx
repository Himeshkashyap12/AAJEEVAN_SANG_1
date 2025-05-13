import { Modal } from "antd";
import CustomText from "./CustomText";

const CustomModel=({openModel,setOpenModel,modelBody,footer,title,width})=>{
     const handleOk = () => {
    setOpenModel(false);
  };

  const handleCancel = () => {
    setOpenModel(false);
  };
    return(
        <>
         
      <Modal
      width={width}
        centered
        title={<CustomText className={"!text-[24px] font-[500] "} text={title}/>}
        open={openModel}
        onOk={handleOk}
        footer={footer}
        // confirmLoading={confirmLoading}
        onCancel={()=>{handleCancel()}}
      >
        {modelBody}
      </Modal>
        </>
    )
}
export default CustomModel;