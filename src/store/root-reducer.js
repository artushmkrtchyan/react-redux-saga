import {combineReducers} from "redux";
import users from "../modules/users/redux/reducers";
const rootReducer = combineReducers({
    users,
});

export default rootReducer;
