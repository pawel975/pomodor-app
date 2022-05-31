import { useCallback, useEffect, useRef, useState } from 'react';
import './RemainTimeBar.scss';

const RemainTimeBar = ({remainLearnTime, remainBreakTime, globalState}) => {
 
    const {initBreakTime, initLearnTime, isLearnPhaseActive} = globalState;

    // Gets default font size for current resolution without 'px'
    const htmlFontSize = window.getComputedStyle(document.documentElement).getPropertyValue("font-size").slice(0,-2)
    console.log(htmlFontSize)

    const circleRef = useRef(null);
    
    const defaultStrokeArray = 1458 * (htmlFontSize / 16);
    circleRef.current.style.strokeDashoffset = defaultStrokeArray;
    // circleRef.current.style.strok = defaultStrokeOffset;
    
    const [strokeOffset, setStrokeOffset] = useState(defaultStrokeArray)

    const refreshRemainTime = useCallback(() => {
        
        if (isLearnPhaseActive) {

            const offset = defaultStrokeArray - (defaultStrokeArray * (remainLearnTime / initLearnTime))

            if (offset > 0) {
                setStrokeOffset(offset)
            } else {
                setStrokeOffset(1);
            }

        } else {
            
            const offset = defaultStrokeArray - (defaultStrokeArray * (remainBreakTime / initBreakTime))
            
            if (offset > 0) {
                setStrokeOffset(offset)
            } else {
                setStrokeOffset(1);
            }
        }

    },[defaultStrokeArray, initBreakTime, initLearnTime, isLearnPhaseActive, remainBreakTime, remainLearnTime])
    
    useEffect(() => {
        refreshRemainTime();
    },[refreshRemainTime])
    
    return (
        <div className='remain-time-bar__container' data-testid="remain-time-bar">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="30rem" height="30rem">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#ff52c2" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle
                    ref={circleRef}
                    style={{strokeDashoffset: strokeOffset > 0 ? strokeOffset : 1}} className='remain-time-bar__stroke' data-testid='remain-time-bar__stroke' cx="50%" cy="50%" r="14.5rem"  />
            </svg>
        </div>
    )
}

export default RemainTimeBar;