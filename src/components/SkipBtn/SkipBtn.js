import './SkipBtn.scss';

const SkipBtn = ({isTimerRun, isLearningBlockActive, handleSkipBtnClick}) => {

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