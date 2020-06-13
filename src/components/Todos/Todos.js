import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { List, Button } from 'antd';
import styles from './Todos.module.css'
import ModalDialog from '../Modal/ModalDialog';

const count = 3;

class Todos extends React.Component {
    state = {
        initLoading: false,
        loading: false,
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
    };

    addTodo = () => {
        this.setState({
            ModalText: 'Add a new todo',
            visible: true,
        });
    }

    handleChange = (e) => {
        console.log(e);
    }

    handleSave = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
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
                <Button onClick={this.addTodo} type="primary">Add New</Button>
                <ModalDialog
                    handleCancel={this.handleCancel}
                    handleOk={this.handleSave}
                    confirmLoading={confirmLoading}
                    visible={visible} title={ModalText}
                    handleChange={this.handleChange} todo={this.props.todos[0]} />
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
                    dataSource={this.props.todos}
                    renderItem={item => (
                        <List.Item actions={[<a key="list-loadmore-edit">Done</a>]}>
                            <div className={styles.container}>
                                <div>{item.action}</div>
                                <div>{item.dateAdded}</div>
                            </div>
                        </List.Item>
                    )}
                />
            </>
        );
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    todos: state.todos.todos
})

export default connect(mapStateToProps)(Todos) ;