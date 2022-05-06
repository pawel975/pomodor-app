import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setGlobalState, setLearnTime, globalState, setBreakTime, isTimerRun, setIsTimerRun, isLearningBlockActive, setIsLearningBlockActive}) => {
    
    const handleSkipBtnClick = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isLearningSessionActive: !prevState.isLearningSessionActive,
        }))
        setLearnTime(globalState.initLearnTime)
        setBreakTime(globalState.initBreakTime)
    }

    const handleStartPauseBtnClick = () => {
        setIsTimerRun(!isTimerRun);
        setIsLearningBlockActive(true)
    }
    
    const handleEndBtnClick = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isLearningSessionActive: true,
        }))
        setIsLearningBlockActive(false)
        setLearnTime(globalState.initLearnTime);
    }

    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn 
                isTimerRun={isTimerRun}
                isLearningBlockActive={isLearningBlockActive}
                handleSkipBtnClick={handleSkipBtnClick}
            />
            <StartPauseBtn 
                isTimerRun={isTimerRun}
                isLearningBlockActive={isLearningBlockActive}
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