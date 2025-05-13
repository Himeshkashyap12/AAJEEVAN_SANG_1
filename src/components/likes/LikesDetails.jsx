
import { Col, Row } from "antd";
import CustomSideProfile from "../common/CustomSideProfile";
import ProfileDetails from "../common/profile/profileDetails/ProfileDetails";

const LikesDetails=()=>{
    return(
        <>
         <Row className="px-[50px]">
        <Col xxl={18} xl={16} lg={16} md={24} sm={24} xs={24}>
       <ProfileDetails/>
        </Col>
        <Col xxl={6} xl={8} lg={8} md={24} sm={24} xs={24}>
          <CustomSideProfile />
        </Col>
      </Row> 
        </>
    )
}
export default LikesDetails;