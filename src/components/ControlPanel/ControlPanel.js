import { useState } from 'react';
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = () => {

    const [isTimerRun, setIsTimerRun] = useState(false);
    const [isLearningBlockActive, setIsLearningBlockActive] = useState(true);
    
    const handleStartPauseBtnClick = () => {
        setIsTimerRun(!isTimerRun);
        // setIsLearningBlockActive(true)
    }

    const handleEndBtnClick = () => {
        setIsLearningBlockActive(false)
    }

    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn 
                isTimerRun={isTimerRun}
                isLearningBlockActive={isLearningBlockActive}
            />
            <StartPauseBtn 
                isTimerRun={isTimerRun}
                handleStartPauseBtnClick={handleStartPauseBtnClick}
            />
            <EndBtn 
                isTimerRun={isTimerRun}
                isLearningBlockActive={isLearningBlockActive}
                handleEndBtnClick={handleEndBtnClick}
            />
        </div>
    )
}

export default ControlPanel;