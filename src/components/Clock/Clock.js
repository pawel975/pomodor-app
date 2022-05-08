import { useCallback, useEffect } from 'react';
import RemainTimeBar from '../RemainTimeBar/RemainTimeBar';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({remainLearnTime, remainBreakTime, setRemainLearnTime, setGlobalState,  setRemainBreakTime, isTimerRun, isLearnPhaseActive, initLearnTime, initBreakTime}) => {

    const resetTimer = useCallback(() => {
        setRemainBreakTime(initBreakTime)
        setRemainLearnTime(initLearnTime)
        setGlobalState(prevState => ({
            isLearnPhaseActive: !prevState.isLearnPhaseActive,
        }))
    }, [initBreakTime, initLearnTime, setGlobalState, setRemainBreakTime, setRemainLearnTime])

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearnPhaseActive) {

                if (remainLearnTime > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setRemainLearnTime(remainLearnTime - 1)
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

    },[isLearnPhaseActive, isTimerRun, remainBreakTime, remainLearnTime, resetTimer, setRemainBreakTime, setRemainLearnTime])

    return (
        <div className="clock" data-testid="clock">
            <RemainTimeBar 
                initLearnTime={initLearnTime}
                remainLearnTime={remainLearnTime}
                initBreakTime={initBreakTime}
                remainBreakTime={remainBreakTime}
                isLearnPhaseActive={isLearnPhaseActive}
            />
            <Timer countDownTime={isLearnPhaseActive ? remainLearnTime : remainBreakTime}/>
        </div>
    )

}

export default Clock;