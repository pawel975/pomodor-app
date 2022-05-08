import { useCallback, useEffect, useState } from 'react';
import './RemainTimeBar.scss';

const RemainTimeBar = ({initLearnTime, remainLearnTime, initBreakTime, remainBreakTime, isLearnPhaseActive}) => {
 
    const [strokeOffset, setStrokeOffset] = useState(1458)

    const refreshRemainTime = useCallback(() => {
        
        if (isLearnPhaseActive) {
            const offset = 1458 - (1458 * (remainLearnTime / initLearnTime))
            setStrokeOffset(offset)
        } else {
            const offset = 1458 - (1458 * (remainBreakTime / initBreakTime))
            setStrokeOffset(offset)
        }

    },[initBreakTime, initLearnTime, isLearnPhaseActive, remainBreakTime, remainLearnTime])
    
    useEffect(() => {
        refreshRemainTime();
    },[refreshRemainTime])
    
    return (
        <div className='remain-time-bar__container' data-testid="remain-time-bar">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30rem" height="30rem">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle
                    style={{strokeDashoffset: strokeOffset}} className='remain-time-bar__stroke' data-testid='remain-time-bar__stroke' cx="50%" cy="50%" r="14.5rem"  />
            </svg>
        </div>
    )
}

export default RemainTimeBar;