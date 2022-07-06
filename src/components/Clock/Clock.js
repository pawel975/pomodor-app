import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate, remainBreakTimeUpdate, remainLearnTimeUpdate, statsticsUpdate, todaysSecondsLearnedIncrement } from '../../actions';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers';
import LearningPhaseLabel from '../LearningPhaseLabel/LearningPhaseLabel';
import RemainTimeBar from '../RemainTimeBar/RemainTimeBar';
import SessionAndBlockCounter from '../SessionAndBlockCounter/SessionAndBlockCounter';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = () => {

    const dispatch = useDispatch();
    const globalStateReducer = useSelector(state => state.globalState);
    const remainLearnTimeReducer = useSelector(state => state.remainLearnTime);
    const remainBreakTimeReducer = useSelector(state => state.remainBreakTime);
    const statisticsReducer = useSelector(state => state.statistics);

    const {isTimerRun, isLearnPhaseActive, isLearningBlockActive, initBreakTime, initLongBreakTime, initLearnTime, currentSession, maxBlock, maxSession, currentBlock} = globalStateReducer;

    const resetTimer = useCallback(() => {

        dispatch(
            globalStateUpdate({
                isLearnPhaseActive: !isLearnPhaseActive,
                isTimerRun: false,
            })
        )

    }, [dispatch, isLearnPhaseActive])

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            // Learning Phase
            if (isLearnPhaseActive) {

                if (remainLearnTimeReducer > 0) {
                    countingTimeout = 
                        setTimeout(() => {
                            dispatch(remainLearnTimeUpdate(remainLearnTimeReducer - 1));
                            dispatch(todaysSecondsLearnedIncrement());
                            saveToLocalStorage("statistics", statisticsReducer);
                        }, 1000);

                } else {
                    countingTimeout = setTimeout(() => {
                        resetTimer();
                        dispatch(remainLearnTimeUpdate(initLearnTime));
                    }, 1000);

                }

            // Break Phase
            } else {
                
                // Decrement remain time if is more than 0
                if (remainBreakTimeReducer > 0) {

                    countingTimeout = setTimeout(() => {
                        dispatch(remainBreakTimeUpdate(remainBreakTimeReducer - 1))
                    }, 1000);

                // Change session
                } else {

                    countingTimeout = setTimeout(() => {

                        resetTimer();
                        dispatch(remainLearnTimeUpdate(initLearnTime))

                        // If it's not last session than increment session counter
                        if (currentSession < maxSession) {
                            dispatch(globalStateUpdate({currentSession: currentSession + 1}))
                            
                            if (currentSession === maxSession - 1) {
                                dispatch(remainBreakTimeUpdate(initLongBreakTime))
                            } else {
                                dispatch(remainBreakTimeUpdate(initBreakTime))
                            }


                        // If it's last session, increment block nad set session to 1
                        } else {

                            dispatch(remainBreakTimeUpdate(initBreakTime))

                            if (currentBlock < maxBlock) {
                                dispatch(
                                    globalStateUpdate({
                                        currentBlock: currentBlock + 1,
                                        currentSession: 1,
                                    })
                                )

                            } else {
            
                                dispatch(
                                    globalStateUpdate({
                                        currentBlock: 1,
                                        currentSession: 1,
                                    })
                                )
                            }
                        }
                    }, 1000);
                }
            }
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[currentBlock, currentSession, dispatch, initBreakTime, initLearnTime, initLongBreakTime, isLearnPhaseActive, isTimerRun, maxBlock, maxSession, remainBreakTimeReducer, remainLearnTimeReducer, resetTimer, statisticsReducer])

    return (
        <div className="clock" data-testid="clock">

            <RemainTimeBar />

            <Timer countDownTime={isLearnPhaseActive ? remainLearnTimeReducer : remainBreakTimeReducer}/>

            <SessionAndBlockCounter />

            {isLearningBlockActive &&
                <LearningPhaseLabel 
                    labelText={isLearnPhaseActive ? "Learning session..." : "Have a break!"}
                />         
            }

        </div>
    )

}

export default Clock;