import { ADD_USER, DELETE_USER, EDIT_USER } from '../actions/actions';

const initialState = {
    users: [
        { id: 1, name: 'Deepak Singh', email: 'deepak@gmail.com' },
        { id: 2, name: 'Sandeep Ojha', email: 'sandeep@gmail.com' }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload]
            }
        case EDIT_USER:
            return {
                users: [...action.payload]
            }
        case DELETE_USER:
            return {
                users: [...action.payload]
            }
        default:
            return state;
    }
};

export default reducer;