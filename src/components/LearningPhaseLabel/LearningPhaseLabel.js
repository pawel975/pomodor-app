import './LearningPhaseLabel.scss';

const LearningPhaseLabel = ({labelText}) => {

    return (
        <div 
            className="learning-phase-label"
            data-testid="learning-phase-label"
        >
            <span>
                {labelText}
            </span>
        </div>
    )
}

export default LearningPhaseLabel;