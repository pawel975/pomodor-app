import { useCallback, useEffect } from 'react';
import RemainTimeBar from '../RemainTimeBar/RemainTimeBar';
import SessionAndBlockCounter from '../SessionAndBlockCounter/SessionAndBlockCounter';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({remainLearnTime, remainBreakTime, setRemainLearnTime, setGlobalState,  setRemainBreakTime, globalState}) => {

    const {isTimerRun, isLearnPhaseActive, initBreakTime, initLearnTime} = globalState;

    const resetTimer = useCallback(() => {

        setGlobalState(prevState => ({
            ...prevState,
            isLearnPhaseActive: !prevState.isLearnPhaseActive,
            isTimerRun: false,
        }))
        setRemainLearnTime(initLearnTime)
        setRemainBreakTime(initBreakTime)

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
                globalState={globalState}
                remainLearnTime={remainLearnTime}
                remainBreakTime={remainBreakTime}
            />
            <Timer countDownTime={isLearnPhaseActive ? remainLearnTime : remainBreakTime}/>
            <SessionAndBlockCounter 
                remainLearnTime={remainLearnTime}
                remainBreakTime={remainBreakTime}
                globalState={globalState}
                setGlobalState={setGlobalState}
            />
        </div>
    )

}

export default Clock;