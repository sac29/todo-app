import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button } from 'antd';
import { createNewUser } from '../../store/actions/userActions';
import ModalDialog from '../Modal/ModalDialog';
import styles from './Users.module.css'


class Users extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        newUser: {
            name: null,
            email: null
        }
    };

    addUser = () => {
        this.setState({
            ModalText: 'Add a new user',
            visible: true,
        });
    }

    handleChange = (e) => {
        const newUser = { ...this.state.newUser };
        newUser[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ newUser: newUser });
    }

    handleSave = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.props.createNewUser(this.state.newUser);
            const newUser = {
                name: null,
                email: null
            }
            this.setState({
                visible: false,
                confirmLoading: false,
                newUser: newUser
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const { visible, confirmLoading, ModalText } = this.state

        return (
            <>
                <Button onClick={this.addUser} type="primary">Add User</Button>
                <ModalDialog
                    handleCancel={this.handleCancel}
                    handleOk={this.handleSave}
                    confirmLoading={confirmLoading}
                    visible={visible} title={ModalText}
                    handleChange={this.handleChange} user={this.state.newUser} />
                <List
                    className="demo-loadmore-list"
                    header={<div className={styles.container}>
                        <div>Name</div>
                        <div>Email</div>
                    </div>}
                    loading={initLoading}
                    itemLayout="horizontal"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 2,
                    }}
                    dataSource={this.props.users}
                    renderItem={item => (
                        <List.Item actions={[<a key="list-loadmore-edit">Done</a>]}>
                            <div className={styles.container}>
                                <div>{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </List.Item>
                    )}
                />
            </>
        );
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.users.users
});

export default connect(mapStateToProps, { createNewUser })(Users);