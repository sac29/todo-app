import React from 'react';
import { List, Typography } from 'antd';
import styles from './Users.module.css'


class Users extends React.Component {
    state = {
        initLoading: false,
        loading: false,
        data: [],
        list: [{ action: 'Sachin', dateAdded: '2020-06-12' },
        { action: 'Medidate for 1 mins', dateAdded: '2020-06-12' },
        { action: 'Medidate for 10 mins', dateAdded: '2020-06-12' }],
    };

    // componentDidMount() {
    //     this.getData(res => {
    //         this.setState({
    //             initLoading: false,
    //             data: res.results,
    //             list: res.results,
    //         });
    //     });
    // }

    //   getData = callback => {
    //     reqwest({
    //       url: fakeDataUrl,
    //       type: 'json',
    //       method: 'get',
    //       contentType: 'application/json',
    //       success: res => {
    //         callback(res);
    //       },
    //     });
    //   };

    //   onLoadMore = () => {
    //     this.setState({
    //       loading: true,
    //       list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    //     });
    //     this.getData(res => {
    //       const data = this.state.data.concat(res.results);
    //       this.setState(
    //         {
    //           data,
    //           list: data,
    //           loading: false,
    //         },
    //         () => {
    //           window.dispatchEvent(new Event('resize'));
    //         },
    //       );
    //     });
    //   };

    render() {
        const { initLoading, loading, list } = this.state;

        return (
            <List
                className="demo-loadmore-list"
                header={<div className={styles.container}>
                    <div>Action    </div>
                    <div>Date Added</div>
                    <div>Operation </div>
                </div>}
                loading={initLoading}
                itemLayout="horizontal"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 2,
                }}
                dataSource={list}
                renderItem={item => (
                    <List.Item actions={[<a key="list-loadmore-edit">Done</a>]}>
                        <div className={styles.container}>
                            <div>{item.action}</div>
                            <div>{item.dateAdded}</div>
                        </div>
                    </List.Item>
                )}
            />
        );
    }
}

export default Users;