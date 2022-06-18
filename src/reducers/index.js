import { combineReducers } from "redux";
import globalStateReducer from "./globalState";
import remainBreakTimeReducer from "./remainBreakTime";
import remainLearnTimeReducer from "./remainLearnTime";

const allReducers = combineReducers({
    globalState: globalStateReducer,
    remainLearnTime: remainLearnTimeReducer,
    remainBreakTime: remainBreakTimeReducer
})

export default allReducers;