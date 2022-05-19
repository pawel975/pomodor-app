import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import App from '../App/App';
import Clock from '../Clock/Clock';
import ControlPanel from '../ControlPanel/ControlPanel';
import SkipBtn from './SkipBtn';

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

    test('should increment active session when break is skipped', () => {

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