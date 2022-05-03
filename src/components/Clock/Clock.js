import { useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({learningTime, breakTime, setLearningSetup, isTimerRun, isLearningSessionActive}) => {

    useEffect(() => {
        
        if (isTimerRun) {

            let countingTimeout;

            if (isLearningSessionActive) {

                if (learningTime > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setLearningSetup(prevState => ({
                            ...prevState,
                            learningTime: learningTime - 1,
                        }))
                    }, 1000);
                }

            } else {
                if (breakTime > 0) {
        
                    countingTimeout = setTimeout(() => {
                        setLearningSetup(prevState => ({
                            ...prevState,
                            breakTime: breakTime - 1,
                        }))
                    }, 1000);
                }
            }
    
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[learningTime, setLearningSetup, isTimerRun, isLearningSessionActive, breakTime])

    return (
        <div className="clock" data-testid="clock">
            <Timer countDownTime={isLearningSessionActive ? learningTime : breakTime}/>
        </div>
    )

}

export default Clock;