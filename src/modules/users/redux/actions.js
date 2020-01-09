import {createActions} from 'reduxsauce';

export const { Types: UsersTypes, Creators: UsersActionCreators} = createActions ({
    getUsersRequest: ['count'],
    getUsersSuccess: ['data'],
    getUsersFailure: ['error'],
    getUserByIdRequest: ['id'],
    getUserByIdSuccess: ['data'],
    getUserByIdFailure: ['error']
});