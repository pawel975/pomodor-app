import { getFromLocalStorage } from "../helpers"

const initGlobalState = 
    getFromLocalStorage("globalState") ? 
    getFromLocalStorage('globalState') :
    {
        initLearnTime: 1500,
        initBreakTime: 300,
        initLongBreakTime: 900,
        maxSession: 4,
        maxBlock: 2,
        currentBlock: 1,
        currentSession: 1,
        isLearnPhaseActive: true,
        isLearningBlockActive: false,
        isTimerRun: false,
        themeId: "infinite-ocean",
        fontId: "concert-one"
    }

const globalStateReducer = (globalState = initGlobalState, action) => {

    switch (action.type) {
        case "GLOBAL_STATE_UPDATE": {
            return {
                ...globalState,
                ...action.payload,
            }
        }
        default:
            return globalState

    }
}

export default globalStateReducer;