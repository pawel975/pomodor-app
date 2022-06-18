import { getFromLocalStorage } from "../helpers"

const remainLearnTime = 
    getFromLocalStorage("remainLearnTime") ?
    getFromLocalStorage("remainLearnTime") : 1500


const remainLearnTimeReducer = (state = remainLearnTime, action) => {

    switch (action.type) {
        case "REMAIN_LEARN_TIME_UPDATE": {
            return state = action.payload
        }
        default:
            return state

    }
}

export default remainLearnTimeReducer;