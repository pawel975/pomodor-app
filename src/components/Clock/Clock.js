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

    const {isTimerRun, isLearnPhaseActive, isLearningBlockActive, initBreakTime, initLearnTime} = globalStateReducer;

    const resetTimer = useCallback(() => {

        dispatch(
            globalStateUpdate({
                isLearnPhaseActive: !isLearnPhaseActive,
                isTimerRun: false,
            })
        )

        dispatch(remainLearnTimeUpdate(initLearnTime))
        dispatch(remainBreakTimeUpdate(initBreakTime))

    }, [dispatch, initBreakTime, initLearnTime, isLearnPhaseActive])

    // const incrementStatisticsRecordTime = (statistics) => {
    //     const statisticsAfter = [...statistics];
    //     statisticsAfter[0].secondsLearned += 1;
    //     return statisticsAfter
    // }

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearnPhaseActive) {

                if (remainLearnTimeReducer > 0) {
                    countingTimeout = setTimeout(() => {
                        dispatch(remainLearnTimeUpdate(remainLearnTimeReducer - 1))
                        dispatch(todaysSecondsLearnedIncrement());
                        saveToLocalStorage("statistics",statisticsReducer);
                        dispatch(statsticsUpdate(getFromLocalStorage("statistics")));
                    }, 1000);
                } else {
                    countingTimeout = setTimeout(() => {
                        resetTimer(initLearnTime);
                    }, 1000);

                }

            } else {
                
                if (remainBreakTimeReducer > 0) {
                    countingTimeout = setTimeout(() => {
                        dispatch(remainBreakTimeUpdate(remainBreakTimeReducer - 1))
                    }, 1000);
                } else {
                    countingTimeout = setTimeout(() => {
                        resetTimer();
                    }, 1000);
                }
            }
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[dispatch, initLearnTime, isLearnPhaseActive, isTimerRun, remainBreakTimeReducer, remainLearnTimeReducer, resetTimer, statisticsReducer])

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