import { ADD_USER, DELETE_USER, EDIT_USER } from './actions';

export const createNewUser = (user) => dispatch => {
    dispatch({
        type: ADD_USER,
        payload: user
    })
};

export const editUser = (users) => dispatch => {
    dispatch({
        type: EDIT_USER,
        payload: users
    });
};

export const deleteUser = (users) => dispatch => {
    dispatch({
        type: DELETE_USER,
        payload: users
    });
};