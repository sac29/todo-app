import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import MainTabs from '../MainTabs/MainTabs';
import styles from './AppLayout.module.css';

const { Header, Footer, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className={styles.header}>
          Todos Users
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <MainTabs />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default AppLayout;