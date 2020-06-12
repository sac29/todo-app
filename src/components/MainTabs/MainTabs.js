import React from 'react';
import { Tabs } from 'antd';
import styles from './MainTabs.module.css';
import Todos from '../Todos/Todos';
import Users from '../Users/Users';

const { TabPane } = Tabs;

function callback(key) {
    console.log(key);
}

const MainTabs = () => {
    return (
        <div className={styles.tabs}>
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Todos" key="1">
                <Todos/>
            </TabPane>
            <TabPane tab="Users" key="2">
                <Users/>
            </TabPane>
        </Tabs>
        </div>
    )
}

export default MainTabs;