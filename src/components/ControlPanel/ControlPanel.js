
import { useDispatch, useSelector } from 'react-redux';
import { globalStateUpdate, remainBreakTimeUpdate, remainLearnTimeUpdate } from '../../actions';
import { saveToLocalStorage } from '../../helpers';
import EndBtn from '../EndBtn/EndBtn';
import SkipBtn from '../SkipBtn/SkipBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import './ControlPanel.scss';

const ControlPanel = () => {

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

        dispatch(remainLearnTimeUpdate(initLearnTime))
        dispatch(remainBreakTimeUpdate(initBreakTime))

    }

    const handleStartPauseBtnClick = () => {
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
        dispatch(remainLearnTimeUpdate(initLearnTime));
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