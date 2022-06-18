
export const globalStateUpdate = (state) => 
    ({type: "GLOBAL_STATE_UPDATE", payload: state })

export const remainLearnTimeUpdate = (state) => 
    ({type: "REMAIN_LEARN_TIME_UPDATE", payload: state })

export const remainBreakTimeUpdate = (state) => 
    ({type: "REMAIN_BREAK_TIME_UPDATE", payload: state })

export const statsticsUpdate = (state) => 
    ({type: "STATISTICS_UPDATE", payload: state})

export const todaysSecondsLearnedIncrement = () => 
    ({type: "TODAYS_SECONDS_LEARNED_INCREMENT"})
