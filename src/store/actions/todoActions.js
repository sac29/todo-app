import { ADD_TODO_ITEM, MARK_TODO_DONE, DELETE_TODO_ITEM } from './actions';

export const createTodoItem = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO_ITEM,
        payload: todo
    });
};


export const markTodoAsDone = (todos) => dispatch => {
    dispatch({
        type: MARK_TODO_DONE,
        payload: todos
    });
};

