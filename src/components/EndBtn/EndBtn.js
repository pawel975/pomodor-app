import { useSelector } from 'react-redux';
import './EndBtn.scss';

const EndBtn = ({handleEndBtnClick}) => {

    const globalStateReducer = useSelector(state => state.globalState);

    const {isTimerRun, isLearningBlockActive} = globalStateReducer;

    let shouldEndBtnBeVisible;

    if (isLearningBlockActive) {
        if (isTimerRun) {
            shouldEndBtnBeVisible = false;
        } else {
            shouldEndBtnBeVisible = true;
        }
    } else {
        shouldEndBtnBeVisible = false;
    }

    return (
        <button 
            className={`end-btn 
            ${shouldEndBtnBeVisible ? "side-btn-visible" : null}
            `}
            onClick={handleEndBtnClick}
        >
            End
        </button>
    )
}

export default EndBtn;