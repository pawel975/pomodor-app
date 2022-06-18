import {render, screen} from '../../testUtils';
import userEvent from '@testing-library/user-event';
import App from '../App/App';
import EndBtn from './EndBtn';

describe('<EndBtn> should', () => {

    test("be rendered", () => {
        render(<EndBtn/>)
        const endBtn = screen.getByText("End");
        expect(endBtn).toBeInTheDocument();
    })

    test('not contain class of side-btn-visible when initilized', () => {

        render(<App/>)
        const endBtn = screen.getByRole("button", {name: "End"});
        expect(endBtn).not.toHaveClass("side-btn-visible")
    })

    test("get class of side-btn-visible when timer is paused", async () => {

        const user = userEvent.setup();

        render(<App/>)

        const endBtn = screen.getByText(/End/i);
        const startPauseBtn = screen.getByTestId("start-pause-btn");

        await user.dblClick(startPauseBtn)

        expect(endBtn).toHaveClass("side-btn-visible");
    })

    test('reset sessions and block progress when clicked', () => {

        const user = userEvent.setup();

        render(<App/>)

        const endBtn = screen.getByText(/End/i);
        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByText(/skip/i);

        user.click(startPauseBtn);
        user.click(startPauseBtn);

        user.click(skipBtn)
        user.click(skipBtn)
        user.click(skipBtn)
        user.click(skipBtn)
        
        user.click(endBtn);

        const currentSession = screen.getByTestId("current-session");
        const currentBlock = screen.getByTestId("current-block");

        expect(currentSession).toHaveTextContent(/1/i);
        expect(currentBlock).toHaveTextContent(/1/i);
        
    });
})