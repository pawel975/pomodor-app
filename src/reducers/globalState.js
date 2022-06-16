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
        
        case "INIT_LEARN_TIME_UPDATE": {
            return {
                ...globalState,
                initLearnTime: action.payload
            }
        }

        case "INIT_BREAK_TIME_UPDATE": {
            return {
                ...globalState,
                initBreakTime: action.payload
            }
        }
        
        case "INIT_LONG_BREAK_TIME_UPDATE": {
            return {
                ...globalState,
                initLongBreakTime: action.payload
            }
        }

        case "MAX_SESSION_UPDATE": {
            return {
                ...globalState,
                maxSession: action.payload
            }
        }

        case "MAX_BLOCK_UPDATE": {
            return {
                ...globalState,
                maxBlock: action.payload
            }
        }

        case "CURRENT_SESSION_UPDATE": {
            return {
                ...globalState,
                currentSession: action.payload
            }
        }

        case "CURRENT_BLOCK_UPDATE": {
            return {
                ...globalState,
                currentBlock: action.payload
            }
        }

        case "IS_LEARN_PHASE_ACTIVE_UPDATE": {
            return {
                ...globalState,
                isLearnPhaseActive: action.payload
            }
        }

        case "IS_LEARNING_BLOCK_ACTIVE_UPDATE": {
            return {
                ...globalState,
                isLearningBlockActive: action.payload
            }
        }

        case "IS_TIMER_RUN_UPDATE": {
            return {
                ...globalState,
                isTimerRun: action.payload
            }
        }

        case "THEME_ID_UPDATE": {
            return {
                ...globalState,
                themeId: action.payload
            }
        }

        case "FONT_ID_UPDATE": {
            return {
                ...globalState,
                fontId: action.payload
            }
        }

        default:
            return globalState

    }
}

export default globalStateReducer;