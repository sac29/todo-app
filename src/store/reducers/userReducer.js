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
                users: [...state.users, action.payload]
            }
        case DELETE_USER:
            return {

            }
        default:
            return state;
    }
};

export default reducer;