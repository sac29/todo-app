import { ADD_USER, DELETE_USER } from '../actions/actions';

const initialState = {
    users: [
        { name: 'Deepak Singh', email: 'deepak@gmail.com' }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.todos, action.payload]
            }
        case DELETE_USER:
            return {

            }
        default:
            return state;
    }
};

export default reducer;