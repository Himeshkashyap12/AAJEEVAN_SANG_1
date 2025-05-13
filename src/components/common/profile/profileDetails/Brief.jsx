import { Col, Image, Row } from "antd";
import "../../../common/common.css"
import peopleIcon from "../../../../assets/icons/peopleIcon.png";
import CustomText from "../../CustomText";
import call from "../../../../assets/icons/call.png";
import message from "../../../../assets/icons/message.png";
import wellet from "../../../../assets/profileDetailsVerify/wallet.png";
import verify from "../../../../assets/icons/verifybrief.png";
const Brief = () => {
  return (
    <>
      <div className="brief">
        <Row align={"middle"}>
          <Col span={8}>
            <div
              style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
              className="py-2 rounded-full w-[140px] flex justify-center items-center"
            >
              <CustomText text={"1. BRIEF"} />
            </div>

            <div className="flex flex-col gap-[16px] ps-[140px]">
              <div>
                <div className="relative">
                  <CustomText
                    className={"!text-[24px] font-[500]"}
                    text={"Bobby Selena , 25"}
                  />
                  <div
                    className="absolute -right-25 top-[5px] ps-[24px] pe-[20px] rounded-l-full py-[5px] flex gap-[36px] items-center"
                    style={{
                      background:
                        "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)",
                    }}
                  >
                    <Image
                      preview={false}
                      src={call}
                      className="!size-[16px]"
                    />
                    <Image
                      preview={false}
                      src={message}
                      className="!size-[16px]"
                    />
                  </div>
                </div>
                <div className="flex items-center ps-[20px] gap-2">
                  <CustomText
                    className={"!text-[12px] font-[300] !text-[#444444] "}
                    text={"Last seen 12 min ago"}
                  />
                  <div className="size-[10px] bg-[#00EAA5] rounded-full    "></div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px]">
                <div className="flex items-center gap-[12px]">
                  <Image className="!h-[20px] !w-[24px]" src={peopleIcon} />
                  <CustomText
                    className={"!text-[14px] font-[400] !text-[#444444] "}
                    text={"5’0”  | 60 Kg | Baharaman, Hindu"}
                  />
                </div>
                <div className="flex items-center gap-[12px]">
                  <Image className="!h-[20px] !w-[24px]" src={peopleIcon} />
                  <CustomText
                    className={"!text-[14px] font-[400] !text-[#444444] "}
                    text={"Govt. - Professor/Lecturer"}
                  />
                </div>
                <div className="flex items-center gap-[12px]">
                  <Image className="!h-[20px] !w-[24px]" src={peopleIcon} />
                  <CustomText
                    className={"!text-[14px] font-[400] !text-[#444444] "}
                    text={"1-2 LPA"}
                  />
                </div>
                <div className="flex items-center gap-[12px]">
                  <Image className="!h-[20px] !w-[24px]" src={peopleIcon} />
                  <CustomText
                    className={"!text-[14px] font-[400] !text-[#444444] "}
                    text={"Lucknow, UP"}
                  />
                </div>
                <div
                  className="ps-[40px] rounded-r-full py-[5px] !w-[220px]"
                  style={{
                    background:
                      "linear-gradient(270deg, #E24A9A 0%, #F81B3E 100%)",
                  }}
                >
                  <CustomText
                    text={"Profile Managed by Parents"}
                    className={"!text-[12px] font-[300] !text-[#fff]"}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[12px]"></div>
            </div>
          </Col>
          <Col span={16}>
            <div className="flex justify-end  px-[50px]">
              <div className="flex flex-col gap-[24px] justify-start ">
                <CustomText className={"!text-[18px] font-[500]"} text={"Verification Score - 60%"} />
                <div className="flex gap-[24px]">
                  <div className="flex flex-col gap-[10px] justify-center items-center relative">
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, #00EAA5 0%, #39FFC5 100%)",
                        borderRadius: "20px 20px 50px 50px",
                      }}
                      className=" flex justify-center items-center rounded-t-2xl  size-[60px]   rounded-b-full"
                    >
                      <Image
                        preview={false}
                        className="!size-[40px] rounded-full "
                        src={wellet}
                      />
                    </div>
                    <div className="absolute bottom-8 right-4">
                      <Image className="!size-[16px] " src={verify} />
                    </div>
                    <div>
                      <CustomText
                        className={"!text-[14px] font-[300] "}
                        text={"Mobile Verified"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] justify-center items-center relative">
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, #00EAA5 0%, #39FFC5 100%)",
                        borderRadius: "20px 20px 50px 50px",
                      }}
                      className=" flex justify-center items-center rounded-t-2xl size-[60px]  rounded-b-full"
                    >
                      <Image
                        preview={false}
                        className="!size-[40px] rounded-full "
                        src={wellet}
                      />
                    </div>
                    <div className="absolute bottom-8 right-4">
                      <Image className="!size-[16px] " src={verify} />
                    </div>
                    <div>
                      <CustomText
                        className={"!text-[14px] font-[300] "}
                        text={"Govt. ID  Verified"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center  gap-[10px] relative">
                    <div
                      style={{
                        background:
                          "linear-gradient(90deg, #00EAA5 0%, #39FFC5 100%)",
                        borderRadius: "20px 20px 50px 50px",
                      }}
                      className=" flex justify-center items-center rounded-t-2xl size-[60px] rounded-b-full"
                    >
                      <Image
                        preview={false}
                        className="!size-[40px] rounded-full "
                        src={wellet}
                      />
                    </div>
                    <div className="absolute bottom-8 right-4">
                      <Image className="!size-[16px] " src={verify} />
                    </div>
                    <div>
                      <CustomText
                        className={"!text-[14px] font-[300] "}
                        text={"Photo  Verified"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center  gap-[10px] relative">
                    <div
                      style={{
                        borderRadius: "20px 20px 50px 50px",
                      }}
                      className=" flex justify-center items-center rounded-t-2xl size-[60px] rounded-b-full bg-[#EE829C]"
                    >
                      <Image
                        preview={false}
                        className="!size-[40px] rounded-full "
                        src={wellet}
                      />
                    </div>
                    <div>
                      <CustomText
                        className={"!text-[14px] font-[300] "}
                        text={"Education not Verified"}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[10px] justify-center items-center relative">
                    <div
                      style={{
                       
                        borderRadius: "20px 20px 50px 50px",
                      }}
                      className=" flex justify-center items-center rounded-t-2xl size-[60px] rounded-b-full bg-[#EE829C]"
                    >
                      <Image
                        preview={false}
                        className="!size-[40px] rounded-full "
                        src={wellet}
                      />
                    </div>
                    <div >
                      <CustomText
                        className={"!text-[14px] font-[300] "}
                        text={"Income not Verified"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Brief;
