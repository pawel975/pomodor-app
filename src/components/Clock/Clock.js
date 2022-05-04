import { useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({learnTime, breakTime, setLearnTime, setBreakTime, isTimerRun, isLearningSessionActive}) => {

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearningSessionActive) {

                if (learnTime > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setLearnTime(learnTime - 1)
                    }, 1000);
                }

            } else {
                if (breakTime > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setBreakTime(breakTime - 1)
                    }, 1000);
                }
            }
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[breakTime, isLearningSessionActive, isTimerRun, learnTime, setBreakTime, setLearnTime])

    return (
        <div className="clock" data-testid="clock">
            <Timer countDownTime={isLearningSessionActive ? learnTime : breakTime}/>
        </div>
    )

}

export default Clock;