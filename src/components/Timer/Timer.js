import "./Timer.scss";

const Timer = () => {
    return (
        <div className="timer" role='timer'>
            <span className="timer__time-container" data-testid="time-container">12:34</span>
        </div>
    )
}

export default Timer;