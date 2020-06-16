import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button } from 'antd';
import { createNewUser, editUser, deleteUser } from '../../store/actions/userActions';
import ModalDialog from '../Modal/ModalDialog';
import styles from './Users.module.css';
import { validateFields } from '../../utility/utility';

class Users extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        isEdit: false,
        emailError: null,
        newUser: {
            name: null,
            email: null,
            id: null
        }
    };

    addUser = () => {
        debugger;
        this.setState({
            ModalText: 'Add a new user',
            visible: true,
            isEdit: false,
        });
    };

    editUser = (user) => {
        debugger
        this.setState({
            ModalText: 'Edit Todo',
            visible: true,
            newUser: user,
            isEdit: true
        });
    };

    deleteUser = (user) => {
        const users = this.props.users.filter(u => u.id !== user.id);
        this.props.deleteUser(users);
    };

    handleChange = (e) => {
        const newUser = { ...this.state.newUser };
        const { name, value } = e.currentTarget;
        newUser[name] = value;
        const emailError = validateFields(name, value);
        this.setState({ newUser: newUser, emailError: emailError });
    }

    handleSave = () => {
        this.setState({
            ModalText: 'Saving...',
            confirmLoading: true,
        });
        setTimeout(() => {
            debugger;
            if (this.state.isEdit) {
                const updatedUser = { ...this.state.newUser }
                const users = this.props.users.map((user) => { return user.id === updatedUser.id ? { ...updatedUser } : user });
                this.props.editUser(users);
            } else {
                const newUser = { ...this.state.newUser };
                newUser['id'] = this.props.users.length + 1;
                this.props.createNewUser(newUser);
            }
            const newUser = {
                name: null,
                email: null,
                id: null
            }
            this.setState({
                visible: false,
                confirmLoading: false,
                newUser: newUser,
                isEdit: false
            });
        }, 2000);
    };

    handleCancel = () => {
        const newUser = {
            name: null,
            email: null,
            id: null
        }
        this.setState({
            visible: false,
            isEdit: false,
            newUser: newUser
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
                    emailError={this.state.emailError}
                    handleChange={this.handleChange} user={this.state.newUser} />
                <List
                    className="demo-loadmore-list"
                    header={<div className={styles.container + " " + styles.heading}>
                        <div>Name</div>
                        <div>Email</div>
                        <div>Operation</div>
                    </div>}
                    loading={initLoading}
                    itemLayout="horizontal"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={this.props.users}
                    renderItem={item => (
                        <div className={styles.container}>
                            <List.Item>
                                <div>{item.name}</div>
                            </List.Item>
                            <List.Item>
                                <div>{item.email}</div>
                            </List.Item>
                            <List.Item>

                                <div className={styles.container}>
                                    <div>
                                        <a onClick={() => this.editUser(item)}>Edit</a>
                                    </div>
                                    <div className={styles.actions}> | </div>
                                    <div>
                                        <a onClick={() => this.deleteUser(item)}>Delete</a>
                                    </div>
                                </div>
                            </List.Item>
                        </div>
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

export default connect(mapStateToProps, { createNewUser, editUser, deleteUser })(Users);