import { getFromLocalStorage } from "../helpers"

const remainBreakTime = 
    getFromLocalStorage("remainBreakTime") ?
    getFromLocalStorage("remainBreakTime") : 300

    
const remainBreakTimeReducer = (state = remainBreakTime, action) => {

    switch (action.type) {
        case "REMAIN_BREAK_TIME_UPDATE": {
            return state = action.payload
        }
        default:
            return state

    }
}

export default remainBreakTimeReducer;