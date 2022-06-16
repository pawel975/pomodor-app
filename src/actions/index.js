
export const globalStateUpdate = (state) => 
    ({type: "GLOBAL_STATE_UPDATE", payload: state })

export const initLearnTimeUpdate = (timeInSec) => 
    ({type: "INIT_LEARN_TIME_UPDATE", payload: timeInSec })

export const initBreakTimeUpdate = (timeInSec) => 
    ({type: "INIT_BREAK_TIME_UPDATE", payload: timeInSec })

export const initLongBreakTimeUpdate = (timeInSec) => 
    ({type: "INIT_LONG_BREAK_TIME_UPDATE", payload: timeInSec })

export const maxSessionUpdate = (numberOfSessions) => 
    ({type: "MAX_SESSION_UPDATE", payload: numberOfSessions })

export const maxBlockUpdate = (numberOfBlocks) => 
    ({type: "MAX_SESSION_UPDATE", payload: numberOfBlocks })

export const currentSessionUpdate = (numberOfSessions) => 
    ({type: "CURRENT_SESSION_UPDATE", payload: numberOfSessions })

export const currentBlockUpdate = (numberOfBlocks) => 
    ({type: "CURRENT_BLOCK_UPDATE", payload: numberOfBlocks })

export const isLearnPhaseActiveUpdate = (isActive) => 
    ({type: "IS_LEARN_PHASE_ACTIVE_UPDATE", payload: isActive })

export const isLearningBlockActiveUpdate = (isActive) => 
    ({type: "IS_LEARNING_BLOCK_ACTIVE_UPDATE", payload: isActive })

export const isTimerRunUpdate = (isRun) => 
    ({type: "IS_TIMER_RUN_UPDATE", payload: isRun })

export const themeIdUpdate = (themeId) => 
    ({type: "THEME_ID_UPDATE", payload: themeId })

export const fontIdUpdate = (fontId) => 
    ({type: "FONT_ID_UPDATE", payload: fontId })

    
        
