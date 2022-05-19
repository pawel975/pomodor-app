import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App/App';
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

    test('reset sessions and block progress when clicked', () => {
        render(<App/>)

        const endBtn = screen.getByText(/End/i);
        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/skip/i);

        fireEvent.click(startPauseBtn);
        fireEvent.click(startPauseBtn);

        fireEvent.click(skipBtn)
        fireEvent.click(skipBtn)
        fireEvent.click(skipBtn)
        fireEvent.click(skipBtn)
        
        fireEvent.click(endBtn);

        const currentSession = screen.getByTestId("current-session");
        const currentBlock = screen.getByTestId("current-block");

        expect(currentSession).toHaveTextContent(/1/i);
        expect(currentBlock).toHaveTextContent(/1/i);
        
    });
})