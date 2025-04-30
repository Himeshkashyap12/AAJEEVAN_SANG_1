import { Col, Image, Row } from "antd";
import profileImage from "../../assets/profile/profile.png"
import CustomText from "../common/CustomText";
import { Link } from "react-router-dom";
const HomeProfile = ({heading,to}) => {
    return (
        <>
        <div className="w-[80%] !overflow-hidden " >
        <div className="flex justify-between items-center pb-[16px]">
                <CustomText className={"!text-[24px] font-[400]"} text={heading}/>
                <Link className={"!text-[14px] font-[300] !text-secondary"} to={to} >View All</Link>
                </div>
            <Row gutter={[20, 20]} className="overflow-hidden">
                <Col span={6}>
                    <div className=" ">
                        <Image
                            preview={false}
                            className="rounded-2xl !size-[300px] w-full h-auto "
                            src={profileImage}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="w-full ">
                        <Image
                            preview={false}
                            className="rounded-2xl !size-[300px]  w-full h-auto object-cover"
                            src={profileImage}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className="w-full ">
                        <Image
                            preview={false}
                            className="rounded-2xl !size-[300px] w-full h-auto object-cover"
                            src={profileImage}
                        />
                    </div>
                </Col>
                <Col span={6}>
                    <div className=" w-full">
                        <Image
                            preview={false}
                            className=" rounded-2xl !size-[300px] h-auto object-cover  !me-32"
                            src={profileImage}
                        />
                    </div>
                </Col>


            </Row>
            </div>

        </>
    )
}
export default HomeProfile;