import { render, screen } from '@testing-library/react';
import SkipBtn from './SkipBtn';

describe('<Skip/> should', () => {
    
    test("be rendered properly", () => {
        render(<SkipBtn/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).toBeInTheDocument();
    })

    test("not have class of side-btn-visible when initilized", () => {
        render(<SkipBtn isTimerRun={false} isLearningBlockActive={false}/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).not.toHaveClass("side-btn-visible");
    })
    
    test("get class of side-btn-visible when timer pause", () => {
        render(<SkipBtn isTimerRun={false} isLearningBlockActive={true}/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).toHaveClass("side-btn-visible");
    })

});