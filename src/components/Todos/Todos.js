import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createTodoItem } from '../../store/actions/todoActions';
import { List, Button } from 'antd';
import styles from './Todos.module.css'
import ModalDialog from '../Modal/ModalDialog';

const count = 3;
const dateFormat = 'YYYY/MM/DD';

class Todos extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
        newTodo: {
            action: null,
            dateAdded: moment().format(dateFormat)
        }
    };

    addTodo = () => {
        this.setState({
            ModalText: 'Add a new todo',
            visible: true,
        });
    }

    handleChange = (e) => {
        const newTodo = { ...this.state.newTodo };
        newTodo['action'] = e.currentTarget.value;
        this.setState({ newTodo: newTodo });
    }

    handleDateChange = (date) => {
        debugger;
        if (date) {
            const newTodo = { ...this.state.newTodo };
            newTodo['dateAdded'] = date.format(dateFormat);
            this.setState({ newTodo: newTodo });
        }
    }

    handleSave = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.props.createTodoItem(this.state.newTodo);
            const newTodo = {
                action: null,
                dateAdded: moment().format(dateFormat)
            }
            this.setState({
                visible: false,
                confirmLoading: false,
                newTodo: newTodo
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
        const { initLoading } = this.state;
        const { visible, confirmLoading, ModalText } = this.state

        return (
            <>
                <Button onClick={this.addTodo} type="primary">Add New</Button>
                <ModalDialog
                    handleCancel={this.handleCancel}
                    handleOk={this.handleSave}
                    confirmLoading={confirmLoading}
                    visible={visible} title={ModalText}
                    handleDateChange={this.handleDateChange}
                    handleChange={this.handleChange} todo={this.state.newTodo} />
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

export default connect(mapStateToProps, { createTodoItem })(Todos);