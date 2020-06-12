import * as actionTypes from './actions';

const initialState = {
    todos: [
        {action: 'Medidate for 15 mins', dateAdded: '2020-06-12'}
    ],
    users: [
        {name: 'Deepak Singh', email: 'deepak@gmail.com'}
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case actionTypes.DELETE_TODO_ITEM:
            return {

            }
        default:
            return state; 
    }
};

export default reducer;