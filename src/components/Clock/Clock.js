import { useEffect } from 'react';
import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = ({time, setTime, isTimerRun}) => {

    useEffect(()=> {
        
        if (isTimerRun) {

            let countingTimeout
    
            if (time > 0) {
    
                countingTimeout = setTimeout(() => {
                    setTime(time - 1)
                }, 1000);
            }
    
            return () => {
                clearTimeout(countingTimeout)
            }
        }

    },[time, setTime, isTimerRun])

    return (
        <div className="clock" data-testid="clock">
            <Timer time={time}/>
        </div>
    )

}

export default Clock;