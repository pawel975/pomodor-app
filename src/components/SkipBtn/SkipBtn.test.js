import { render, screen } from '../../testUtils';
import App from '../App/App';
import SkipBtn from './SkipBtn';
import userEvent from '@testing-library/user-event';

describe('<Skip/> should', () => {
    
    test("be rendered properly", () => {
        render(<SkipBtn/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).toBeInTheDocument();
    })

    test("not have class of side-btn-visible when initilized", () => {
        render(<SkipBtn/>)
        const skipBtnComponent = screen.getByText("Skip");
        expect(skipBtnComponent).not.toHaveClass("side-btn-visible");
    })
    
    test("get class of side-btn-visible when timer pause", async () => {

        const user = userEvent.setup();
        render(<App/>)

        const startPauseBtn = screen.getByTestId('start-pause-btn');
        await user.dblClick(startPauseBtn)
        
        const skipBtn = screen.getByText("Skip");
        expect(skipBtn).toHaveClass("side-btn-visible");
    })

    test('increment active session when break is skipped', async () => {

        const user = userEvent.setup();
        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/skip/i);
        
        await user.dblClick(startPauseBtn);
        await user.dblClick(skipBtn);
        await user.click(skipBtn);

        const currentSession = screen.getByTestId('current-session');
        expect(currentSession).toHaveTextContent(/2/i);

    });

});

