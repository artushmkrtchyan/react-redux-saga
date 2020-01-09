import {createReducer} from 'reduxsauce';
import {UsersTypes} from './actions';

export const users  = {
    users: [],
    error: "",
    loading: false,
    user: []
};

export const getUsersRequest = (state) => {
    return {...state, loading: true};
};


export const getUsersSuccess = (state, action) => {
    return {...state, users: action.data, error: "", loading: false};
};

export const getUsersFailure = (state, action) => {
    return {...state, error: action.error, users: {}, loading: false};
};

export const getUserByIdRequest = (state) => {
    return {...state};
};


export const getUserByIdSuccess = (state, action) => {
    return {...state, user: action.data, error: ""};
};

export const getUserByIdFailure = (state, action) => {
    return {...state, error: action.error, user: {}};
};

export const handlers = {
    [UsersTypes.GET_USERS_REQUEST]: getUsersRequest,
    [UsersTypes.GET_USERS_SUCCESS]:getUsersSuccess,
    [UsersTypes.GET_USERS_FAILURE]: getUsersFailure,
    [UsersTypes.GET_USER_BY_ID_REQUEST]: getUserByIdRequest,
    [UsersTypes.GET_USER_BY_ID_SUCCESS]: getUserByIdSuccess,
    [UsersTypes.GET_USER_BY_ID_FAILURE]: getUserByIdFailure
};

export default createReducer(users, handlers);