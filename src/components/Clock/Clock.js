import Timer from '../Timer/Timer';
import './Clock.scss';

const Clock = () => {
    return (
        <div className="clock" data-testid="clock">
            <Timer/>
        </div>
    )

}

export default Clock;