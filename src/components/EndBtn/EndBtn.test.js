import {render, screen} from '@testing-library/react';
import EndBtn from './EndBtn';

describe('<EndBtn> should', () => {

    test("be rendered", () => {
        render(<EndBtn globalState={{}}/>)
        const endBtn = screen.getByText("End");
        expect(endBtn).toBeInTheDocument();
    })

    test('not contain class of side-btn-visible when initilized', () => {
        render(
            <EndBtn globalState={{
                isTimerRun: false,
                isLearningBlockActive: false
                }} 
            />
            )
        const endBtn = screen.getByRole("button", {name: "End"});
        expect(endBtn).not.toHaveClass("side-btn-visible")
    })

    test("get class of side-btn-visible when timer is paused", () => {
        render(
            <EndBtn globalState={{
                isTimerRun: false,
                isLearningBlockActive: true
                }} 
            />
            )
        const endBtn = screen.getByRole("button", {name: "End"});
        expect(endBtn).toHaveClass("side-btn-visible");
    })
})