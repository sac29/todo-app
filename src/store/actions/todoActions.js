import { ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actions';

export const createTodoItem = (todo) => dispatch => {
    dispatch({
        type: ADD_TODO_ITEM,
        payload: todo
    })
}