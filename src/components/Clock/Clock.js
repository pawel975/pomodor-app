import { useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({learn, breakk, setLearn, setBreakk, learningTime, breakTime, setLearningSetup, isTimerRun, isLearningSessionActive}) => {

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearningSessionActive) {

                if (learn > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setLearn(learn - 1)
                    }, 1000);
                }

            } else {
                if (breakk > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setBreakk(breakk - 1)
                    }, 1000);
                }
            }
    
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[learningTime, setLearningSetup, isTimerRun, isLearningSessionActive, breakTime, setLearn, learn, setBreakk, breakk])

    return (
        <div className="clock" data-testid="clock">
            <Timer countDownTime={isLearningSessionActive ? learn : breakk}/>
        </div>
    )

}

export default Clock;