import { screen, render } from "../../testUtils";
import userEvent from '@testing-library/user-event';
import App from "../App/App";

describe('<StartPauseBtn/> should', () => {

    test("render properly", () => {
        
        render(<App/>);
        const buttonComponent = screen.getByTestId("start-pause-btn");
        expect(buttonComponent).toBeInTheDocument();
    })

    test("contain pause icon if timer runs", async () => {

        
        render(<App/>)
        const user = userEvent.setup();
        
        const startPauseBtn = screen.getByTestId("start-pause-btn")
        user.click(startPauseBtn)
        
        const pauseIcon = await screen.findByTestId("pause-icon");
        expect(startPauseBtn).toContainElement(pauseIcon)
    })

    test("contain play icon if timer is paused", async () => {

        const user = userEvent.setup();

        render(<App/>)
        
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        user.dblClick(startPauseBtnComponent)
        
        const playIcon = await screen.findByTestId("play-icon");
        expect(startPauseBtnComponent).toContainElement(playIcon)
    })

    test("contain 'start' text if learning block isn't active", () => {

        render(<App/>)
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const startText = screen.getByText(/start/i);
        expect(startPauseBtnComponent).toContainElement(startText)
    })
})
