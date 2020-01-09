import {UsersTypes, UsersActionCreators} from "./actions";
import { takeLatest, put, call } from "redux-saga/effects";
import {delay} from "../../../helpers";
import service  from "../../../service";

export function* getUsers(params) {
    try {
        const users = yield call(() => {
            return service.users(params.count)
        });
        yield delay(2000);
        yield put(UsersActionCreators.getUsersSuccess(users));
    } catch (e) {
        yield put(UsersActionCreators.getUsersFailure(e.message));
    }
}
export function* getUserById(params) {
    try {
        const users = yield call(() => {
            return service.user(params.id)
        });
        yield delay(4000);
        yield put(UsersActionCreators.getUserByIdSuccess(users));
    } catch (e) {
        yield put(UsersActionCreators.getUserByIdFailure(e.message));
    }
}

export function* usersSaga() {
    yield takeLatest(UsersTypes.GET_USERS_REQUEST, getUsers);
    yield takeLatest(UsersTypes.GET_USER_BY_ID_REQUEST, getUserById);
}

export default usersSaga;
