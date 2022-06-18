
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate } from '../../actions';
import { saveToLocalStorage } from '../../helpers';
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = ({setRemainLearnTime, setRemainBreakTime}) => {

    const dispatch = useDispatch();
    const globalStateReducer = useSelector(state => state.globalState);

    const {currentSession, maxSession, currentBlock, maxBlock, isLearnPhaseActive, initLearnTime, initBreakTime, isTimerRun} = globalStateReducer;

    saveToLocalStorage("globalState", globalStateReducer);
    
    const handleSkipBtnClick = () => {

        if (!isLearnPhaseActive) {

            if (currentSession < maxSession) {

                dispatch(
                    globalStateUpdate({currentSession: currentSession + 1})
                )

            } else {

                if (currentBlock < maxBlock) {

                    dispatch(
                        globalStateUpdate({
                            currentBlock: currentBlock + 1,
                            currentSession: 1,
                        })
                    )

                } else {

                    dispatch(
                        globalStateUpdate({
                            currentBlock: 1,
                            currentSession: 1,
                        })
                    )

                }
            }
        }

        dispatch(
            globalStateUpdate({
                isLearnPhaseActive: !isLearnPhaseActive,
            })
        )

        setRemainLearnTime(initLearnTime)
        setRemainBreakTime(initBreakTime)

    }

    const handleStartPauseBtnClick = () => {
        console.log(globalStateReducer)
        dispatch(
            globalStateUpdate({
                isTimerRun: !isTimerRun,
                isLearningBlockActive: true
            })
        )
    }
    
    const handleEndBtnClick = () => {
        dispatch(
            globalStateUpdate({
                isLearnPhaseActive: true,
                isLearningBlockActive: false,
                currentBlock: 1,
                currentSession: 1,
            })
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