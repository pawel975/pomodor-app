import { render, screen } from '@testing-library/react';
import { getFromLocalStorage } from '../../helpers';
import ControlPanel from './ControlPanel';
import userEvent from '@testing-library/user-event';
import App from '../App/App';

describe('<ControlPanel/> should', () => {
    
    test("be rendered properly", () => {
        render(<ControlPanel globalState={{}}/>)
        const controlPanelComponent = screen.getByTestId("control-panel");
        expect(controlPanelComponent).toBeInTheDocument();
    })

    // test("save current session and block to state properly when any of control buttons are clicked", async () => {
    //     render(<App/>)
    //     const user = userEvent.setup();
        
    //     const startPauseBtn = screen.getByTestId("start-pause-btn");
    //     const skipBtn = screen.getByText(/skip/i);
        
    //     await user.dblClick(startPauseBtn)
    //     await user.dblClick(skipBtn)

    //     const state = getFromLocalStorage("globalState") ? getFromLocalStorage("globalState") : null;
        
    //     let currentSession = state.currentSession;

    //     expect(currentSession).toBe(2);
    // })


});