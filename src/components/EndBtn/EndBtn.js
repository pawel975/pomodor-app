import './EndBtn.scss';

const EndBtn = ({handleEndBtnClick, globalState}) => {

    const {isTimerRun, isLearningBlockActive} = globalState;

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