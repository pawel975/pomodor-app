import { useSelector } from 'react-redux';
import './SkipBtn.scss';

const SkipBtn = ({handleSkipBtnClick}) => {

    const globalStateReducer = useSelector(state => state.globalState);

    const {isTimerRun, isLearningBlockActive} = globalStateReducer;

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