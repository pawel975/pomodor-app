import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setGlobalState, setRemainLearnTime, globalState, setRemainBreakTime}) => {
    
    const handleSkipBtnClick = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isLearnPhaseActive: !prevState.isLearnPhaseActive,
        }))
        setRemainLearnTime(globalState.initLearnTime)
        setRemainBreakTime(globalState.initBreakTime)
    }

    const handleStartPauseBtnClick = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isTimerRun: !prevState.isTimerRun,
            isLearningBlockActive: true
        }));
    }
    
    const handleEndBtnClick = () => {
        setGlobalState(prevState => ({
            ...prevState,
            isLearnPhaseActive: true,
            isLearningBlockActive: false,
        }))
        setRemainLearnTime(globalState.initLearnTime);
    }

    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn 
                globalState={globalState}
                handleSkipBtnClick={handleSkipBtnClick}
            />
            <StartPauseBtn 
                globalState={globalState}
                handleStartPauseBtnClick={handleStartPauseBtnClick}
            />
            <EndBtn 
                globalState={globalState}
                handleEndBtnClick={handleEndBtnClick}
            />
        </div>
    )
}

export default ControlPanel;