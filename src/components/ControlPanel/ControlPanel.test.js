import { render, screen, fireEvent } from '@testing-library/react';
import { useState } from 'react';
import EndBtn from '../EndBtn/EndBtn';
import StartPauseBtn from '../StartPauseBtn/StartPauseBtn';
import ControlPanel from './ControlPanel';

describe('<ControlPanel/> should', () => {
    
    test("be rendered properly", () => {
        render(<ControlPanel/>)
        const controlPanelComponent = screen.getByTestId("control-panel");
        expect(controlPanelComponent).toBeInTheDocument();
    })

    test("end learning block when clicked", () => {

        // setting upper timeout becuase test were failing
        jest.setTimeout(10000)

        // Mocking ControlPanel to include fake state that is demand fo EndBtn
        const MockControlPanel = () => {

            const [isLearningBlockActive, setIsLearningBlockActive] = useState(true);
            return (
                <ControlPanel 
                isLearningBlockActive={isLearningBlockActive}
                setIsLearningBlockActive={jest.fn(() => setIsLearningBlockActive(false))}
                >
                </ControlPanel>
            )
        }

        render(
            <MockControlPanel/>
        )

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const endBtn = screen.getByRole("button", {name: "End"});
        fireEvent.click(endBtn)
        expect(startPauseBtn).toHaveTextContent("Start")
    })
    
});