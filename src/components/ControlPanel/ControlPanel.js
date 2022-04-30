import { useState } from 'react';
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = () => {

    const [isTimerRun, setIsTimerRun] = useState(false);

    const handleStartPauseBtnClick = () => {
        setIsTimerRun(!isTimerRun);
    }

    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn/>
            <StartPauseBtn 
                isTimerRun={isTimerRun}
                handleStartPauseBtnClick={handleStartPauseBtnClick}
            />
            <EndBtn/>
        </div>
    )
}

export default ControlPanel;