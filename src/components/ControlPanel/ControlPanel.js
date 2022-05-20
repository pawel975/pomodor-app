
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setGlobalState, setRemainLearnTime, globalState, setRemainBreakTime}) => {

    const {currentSession, maxSession, currentBlock, maxBlock, isLearnPhaseActive, initLearnTime, initBreakTime} = globalState;
    
    const handleSkipBtnClick = () => {

        if (!isLearnPhaseActive) {

            if (currentSession < maxSession) {

                setGlobalState(prevState => ({
                    ...prevState,
                    currentSession: currentSession + 1,
                }))

            } else {

                if (currentBlock < maxBlock) {

                    setGlobalState(prevState => ({
                        ...prevState,
                        currentBlock: currentBlock + 1,
                        currentSession: 1,
                    }))

                } else {

                    setGlobalState(prevState => ({
                        ...prevState,
                        currentBlock: 1,
                        currentSession: 1,
                    }))

                }
            }
        }

        setGlobalState(prevState => ({
            ...prevState,
            isLearnPhaseActive: !prevState.isLearnPhaseActive,
        }))

        setRemainLearnTime(initLearnTime)
        setRemainBreakTime(initBreakTime)
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
            currentBlock: 1,
            currentSession: 1,
        }))
        setRemainLearnTime(initLearnTime);
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