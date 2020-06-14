import { ADD_USER, DELETE_USER } from './actions';

export const createNewUser = (user) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user
    })
}