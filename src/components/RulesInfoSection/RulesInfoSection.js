import './RulesInfoSection.scss';

const RulesInfoSection = () => {
    return (
        <section
            className="rules-info-section"
            data-testid="rules-info-section"
        >
            <p>The Pomodoro Technique is time management method to split learning time into focused work session with short breaks to promote sustained concentration and stave off mental fatigue.</p>
            <ul>
                <li>Choose a single task you will focus on and write it down.</li>
                <li>Set the timer to 25 minutes.</li>
                <li>Work on the task until the learning session is off</li>
                <li>Take a short 5 minute break.</li>
                <li>Work for another 25 minutes.</li>
                <li>After 3-4 work periods of 25 minutes, take a longer 20-30 minute break.</li>
                <li>Repeat whole learning block if you can still concentrate</li>
            </ul>

        </section>
    )
}

export default RulesInfoSection;