import { Avatar, Flex, Layout } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import arrowleft from "../../../assets/icons/arrowleft.png";
import SidebarChat from "./SidebarChat";
import HeaderChat from "./HeaderChat";
import ChatMessageBox from "./ChatMessageBox";

const ChatBox = () => {
  const headerStyle = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #D9DCE0",
    padding:"0 16px",
    borderRadius: "0 20px 0 0",
  };
  const contentStyle = {
    border: "1px solid #D9DCE0",
    borderRadius: "0 0 20px 0",
    backgroundColor: "#fff",
  };
  const siderStyle = {
    textAlign: "center",
    color: "#000",
    backgroundColor: "#fff",
    border: "1px solid #D9DCE0",
    borderRadius: "20px 0 0 20px",
  };

  const layoutStyle = {
    height: "720px",
    border: "1px solid #D9DCE0",
    borderRadius: "20px",
  };

  return (
    <>
      <div className="px-[100px]">
        <div className=" cursor-pointer py-[40px]">
          <Avatar src={arrowleft} className="!size-[40px]" />
        </div>
        <Flex gap="middle" wrap>
          <Layout style={layoutStyle}>
            <Sider width="25%" style={siderStyle}>
            <SidebarChat/>
            </Sider>
            <Layout>
              <Header style={headerStyle}>
                <HeaderChat/>
              </Header>
              <Content style={contentStyle}><ChatMessageBox/></Content>
            </Layout>
          </Layout>
        </Flex>
      </div>
    </>
  );
};
export default ChatBox;
