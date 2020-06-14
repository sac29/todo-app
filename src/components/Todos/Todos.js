import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createTodoItem, markTodoAsDone } from '../../store/actions/todoActions';
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
            dateAdded: moment().format(dateFormat),
            isCompleted: false,
            id: null
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
            const newTodo = { ...this.state.newTodo };
            newTodo['id'] = this.props.todos.length + 1;
            this.props.createTodoItem(newTodo);
            const todo = {
                action: null,
                dateAdded: moment().format(dateFormat),
                isCompleted: false,
                id: null
            }
            this.setState({
                visible: false,
                confirmLoading: false,
                newTodo: todo
            });
        }, 2000);
    };

    markAsDone = (todo) => {
        const updatedItem = { ...todo, isCompleted: !todo.isCompleted }
        const todos = this.props.todos.map((todo, i) => { return todo.id === updatedItem.id ? { ...updatedItem } : todo });
        this.props.markTodoAsDone([...todos]);
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
                    renderItem={(item, key) => (
                        <List.Item key={key} actions={[<a key="list-loadmore-edit" onClick={() => this.markAsDone(item)}>Done</a>]}>
                            <div className={styles.container}>
                                <div>{item.id}</div>
                                <div>{item.action}</div>
                                <div>{item.dateAdded}</div>
                                <div>{item.isCompleted.toString()}</div>
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
});

export default connect(mapStateToProps, { createTodoItem, markTodoAsDone })(Todos);