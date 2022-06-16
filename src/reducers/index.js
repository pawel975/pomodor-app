import { combineReducers } from "redux";
import globalStateReducer from "./globalState";

const allReducers = combineReducers({
    globalState: globalStateReducer,
})

export default allReducers;