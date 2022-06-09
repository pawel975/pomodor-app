import { render, screen } from "@testing-library/react";
import LearningPhaseLabel from "./LearningPhaseLabel";

describe('<LearningPhaseLabel/> should', () => {
    
    test('be rendered properly', () => {
        render(<LearningPhaseLabel/>);
        const learningPhaseLabel = screen.getByTestId("learning-phase-label");
        expect(learningPhaseLabel).toBeInTheDocument();
    });

});