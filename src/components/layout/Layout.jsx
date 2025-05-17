import React from 'react';
import { Flex, Layout } from 'antd';
import CustomHeader from '../common/Header';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const CustomLayout=({sidebar=true})=>{

    const headerStyle = {
        color: '#fff',
        padding:"0px",
        backgroundColor:"#fff"
      
      };
      const contentStyle = {
        backgroundColor: '#fff',
      };
      const siderStyle = {
        backgroundColor: '#fff', 
        borderRadius:"10px",
    
      };
      const layoutStyle = {
    
      };
    return(
        <>
        <Flex gap="middle" wrap>
           <Layout style={layoutStyle}>
      <Header style={headerStyle}>
        <CustomHeader/>
      </Header>
      <Layout>
        <Content  style={contentStyle}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
    </Flex>
        </>
    )
}
export default CustomLayout;