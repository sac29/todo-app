import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import styles from './AppLayout';
import  MainTabs  from '../MainTabs/MainTabs';
const { Header, Footer, Content } = Layout;


const AppLayout = () => {

  return (
    <Layout className="layout">
      <Header>
        <div style={styles.header}>
          Some 
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <MainTabs/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default AppLayout;