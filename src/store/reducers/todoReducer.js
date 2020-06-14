import { ADD_TODO_ITEM, DELETE_TODO_ITEM, MARK_TODO_DONE } from '../actions/actions';

const initialState = {
    todos: [
        { id: 1, action: 'Medidate for 445 mins', dateAdded: '2020/06/12', isCompleted: false }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO_ITEM:
            return {
                todos: [...state.todos, action.payload]
            }
        case MARK_TODO_DONE:
            return {
                todos: [...action.payload]
            }
        case DELETE_TODO_ITEM:
            return {

            }
        default:
            return state;
    }
};

export default reducer;