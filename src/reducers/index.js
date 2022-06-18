import { combineReducers } from "redux";
import globalStateReducer from "./globalState";
import remainBreakTimeReducer from "./remainBreakTime";
import remainLearnTimeReducer from "./remainLearnTime";
import statisticsReducer from "./statistisc";

const allReducers = combineReducers({
    globalState: globalStateReducer,
    remainLearnTime: remainLearnTimeReducer,
    remainBreakTime: remainBreakTimeReducer,
    statistics: statisticsReducer,
})

export default allReducers;