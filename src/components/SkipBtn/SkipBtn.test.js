import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App/App';
import SkipBtn from './SkipBtn';
import userEvent from '@testing-library/user-event';
import { getFromLocalStorage } from '../../helpers';

describe('<Skip/> should', () => {
    
    test("be rendered properly", () => {
        render(<SkipBtn globalState={{}}/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).toBeInTheDocument();
    })

    test("not have class of side-btn-visible when initilized", () => {
        render(
        <SkipBtn globalState={{
            isTimerRun: false,
            isLearningBlockActive: false
            }} 
        />
        )
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).not.toHaveClass("side-btn-visible");
    })
    
    test("get class of side-btn-visible when timer pause", () => {
        render(
            <SkipBtn globalState={{
                isTimerRun: false,
                isLearningBlockActive: true
                }} 
            />
        )
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).toHaveClass("side-btn-visible");
    })

    test('increment active session when break is skipped', () => {

        render(<App/>)
        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/skip/i);

        fireEvent.click(startPauseBtn);
        fireEvent.click(startPauseBtn);
        fireEvent.click(skipBtn);
        fireEvent.click(skipBtn);

        const currentSession = screen.getByTestId('current-session');
        expect(currentSession).toHaveTextContent(/2/i);

    });

});

