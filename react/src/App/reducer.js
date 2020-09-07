import { combineReducers } from "redux";
import logInPanel from "containers/LogInPanel/reducer";
import user from "./User/reducer";

export default combineReducers({
    logInPanel,
    user
});