import { useCallback, useEffect } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers';
import LearningPhaseLabel from '../LearningPhaseLabel/LearningPhaseLabel';
import RemainTimeBar from '../RemainTimeBar/RemainTimeBar';
import SessionAndBlockCounter from '../SessionAndBlockCounter/SessionAndBlockCounter';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({remainLearnTime, remainBreakTime, setRemainLearnTime, setGlobalState,  setRemainBreakTime, globalState, statistics, setStatistics}) => {

    const {isTimerRun, isLearnPhaseActive, isLearningBlockActive, initBreakTime, initLearnTime} = globalState;

    const resetTimer = useCallback(() => {

        setGlobalState(prevState => ({
            ...prevState,
            isLearnPhaseActive: !prevState.isLearnPhaseActive,
            isTimerRun: false,
        }))
        setRemainLearnTime(initLearnTime)
        setRemainBreakTime(initBreakTime)

    }, [initBreakTime, initLearnTime, setGlobalState, setRemainBreakTime, setRemainLearnTime])

    const updatedStatistics = (statistics) => {
        const statisticsAfter = statistics;
        statisticsAfter[0].minutesLearned += 1;
        return statisticsAfter
    }

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearnPhaseActive) {

                if (remainLearnTime > 0) {
                    countingTimeout = setTimeout(() => {
                        setRemainLearnTime(remainLearnTime - 1)
                        saveToLocalStorage("statistics", updatedStatistics(statistics));
                        setStatistics(getFromLocalStorage("statistics"));
                    }, 1000);
                } else {
                    countingTimeout = setTimeout(() => {
                        resetTimer();
                    }, 1000);

                }

            } else {
                
                if (remainBreakTime > 0) {
                    countingTimeout = setTimeout(() => {
                        setRemainBreakTime(remainBreakTime - 1)
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

    },[isLearnPhaseActive, isTimerRun, remainBreakTime, remainLearnTime, resetTimer, setRemainBreakTime, setRemainLearnTime, setStatistics, statistics])

    return (
        <div className="clock" data-testid="clock">

            <RemainTimeBar 
                globalState={globalState}
                remainLearnTime={remainLearnTime}
                remainBreakTime={remainBreakTime}
            />

            <Timer countDownTime={isLearnPhaseActive ? remainLearnTime : remainBreakTime}/>

            <SessionAndBlockCounter 
                remainBreakTime={remainBreakTime}
                globalState={globalState}
                setGlobalState={setGlobalState}
            />

            {isLearningBlockActive &&
                <LearningPhaseLabel 
                    labelText={isLearnPhaseActive ? "Learning session..." : "Have a break!"}
                />         
            }

        </div>
    )

}

export default Clock;