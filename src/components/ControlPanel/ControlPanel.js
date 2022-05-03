import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setLearningSetup, setLearn, learningSetup, setBreakk, isTimerRun, setIsTimerRun, isLearningBlockActive, setIsLearningBlockActive}) => {
    
    const handleSkipBtnClick = () => {
        setLearningSetup(prevState => ({
            ...prevState,
            isLearningSessionActive: !prevState.isLearningSessionActive,
        }))
        setLearn(learningSetup.learningTime)
        setBreakk(learningSetup.breakTime)
    }

    const handleStartPauseBtnClick = () => {
        setIsTimerRun(!isTimerRun);
        setIsLearningBlockActive(true)
    }

    const handleEndBtnClick = () => {
        setIsLearningBlockActive(false)
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