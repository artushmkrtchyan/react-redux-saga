import {all, spawn} from "redux-saga/effects";
import usersSaga from "../modules/users/redux/sagas";

export default function* rootSaga() {
    yield all([
        spawn(usersSaga),
    ]);
}