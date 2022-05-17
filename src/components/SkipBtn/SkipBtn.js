import './SkipBtn.scss';

const SkipBtn = ({globalState, handleSkipBtnClick}) => {

    const {isTimerRun, isLearningBlockActive} = globalState;

    let shouldSkipBtnBeVisible = false;

    if (isLearningBlockActive) {
        if (isTimerRun) {
            shouldSkipBtnBeVisible = false;
        } else {
            shouldSkipBtnBeVisible = true;
        }
    }

    return (
        <button className={`skip-btn 
            ${shouldSkipBtnBeVisible ? "side-btn-visible" : null}
        `}
            onClick={handleSkipBtnClick}
        >
            Skip
        </button>
    )
}

export default SkipBtn;