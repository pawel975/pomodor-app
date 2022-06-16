
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate } from '../../actions';
import { saveToLocalStorage } from '../../helpers';
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setRemainLearnTime, setRemainBreakTime}) => {

    const dispatch = useDispatch();
    const globalStateReducer = useSelector(state => state.globalStateReducer);

    const {currentSession, maxSession, currentBlock, maxBlock, isLearnPhaseActive, initLearnTime, initBreakTime} = globalStateReducer;

    saveToLocalStorage("globalState", globalStateReducer);
    
    const handleSkipBtnClick = () => {

        if (!isLearnPhaseActive) {

            if (currentSession < maxSession) {

                dispatch(
                    globalStateUpdate(prevState => ({
                        ...prevState,
                        currentSession: currentSession + 1,
                    }))
                )

            } else {

                if (currentBlock < maxBlock) {

                    dispatch(
                        globalStateUpdate(prevState => ({
                            ...prevState,
                            currentBlock: currentBlock + 1,
                            currentSession: 1,
                        }))
                    )

                } else {

                    dispatch(
                        globalStateUpdate(prevState => ({
                            ...prevState,
                            currentBlock: 1,
                            currentSession: 1,
                        }))
                    )

                }
            }
        }

        dispatch(
            globalStateUpdate(prevState => ({
                ...prevState,
                isLearnPhaseActive: !prevState.isLearnPhaseActive,
            }))
        )

        setRemainLearnTime(initLearnTime)
        setRemainBreakTime(initBreakTime)

    }

    const handleStartPauseBtnClick = () => {
        dispatch(
            globalStateUpdate(prevState => ({
                ...prevState,
                isTimerRun: !prevState.isTimerRun,
                isLearningBlockActive: true
            }))
        )
    }
    
    const handleEndBtnClick = () => {
        dispatch(
            globalStateUpdate(prevState => ({
                ...prevState,
                isLearnPhaseActive: true,
                isLearningBlockActive: false,
                currentBlock: 1,
                currentSession: 1,
            }))
        )
        setRemainLearnTime(initLearnTime);
    }

    return (
        <div className="control-panel" data-testid='control-panel'>
            <SkipBtn 
                handleSkipBtnClick={handleSkipBtnClick}
            />
            <StartPauseBtn 
                handleStartPauseBtnClick={handleStartPauseBtnClick}
            />
            <EndBtn 
                handleEndBtnClick={handleEndBtnClick}
            />
        </div>
    )
}

export default ControlPanel;