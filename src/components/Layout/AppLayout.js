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
      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          <MainTabs />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default AppLayout;