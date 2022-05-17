import { formatTime } from "../../helpers";
import "./Timer.scss";

const Timer = ({countDownTime}) => {

    const formattedTime = formatTime(countDownTime);

    return (
        <div className="timer" role='timer'>
            <span className="timer__time-container" data-testid="time-container">
                {formattedTime}
            </span>
        </div>
    )
}

export default Timer;