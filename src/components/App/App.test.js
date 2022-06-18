import { screen, render, fireEvent } from "../../testUtils";
import { act } from "react-dom/test-utils";
import { sleep } from "../../helpers";
import Clock from "../Clock/Clock";
import ControlPanel from "../ControlPanel/ControlPanel";
import App from "./App";

describe("<App/> component should", () => {

    test("stop timer from running if control panel paused it", async () => {

        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");

        fireEvent.click(startPauseBtn);
        fireEvent.click(startPauseBtn);
        
        await act(() => sleep(1000))

        const timer = screen.getByTestId("time-container");
        expect(timer).toHaveTextContent("25:00")
    }) 


    test("run timer if control panel play icon is triggered", async () => {

        render(
            <App>
                <Clock learningTime={1500}/>
            </App>
        )

        const startPauseBtn = screen.getByTestId("start-pause-btn");

        fireEvent.click(startPauseBtn);

        await act(() => sleep(1000))

        const timer = screen.getByTestId("time-container");
        expect(timer).toHaveTextContent("24:59")
    }) 

    
    test("skip to break if learning session is active", () => {

        render(
            <App>
                <Clock 
                    isTimerRun={true}
                    isLearningSessionActive={true}
                />
                <ControlPanel 
                    isTimerRun={true} 
                    isLearningBlockActive={true}
                />
            </App>
        )

        const skipBtn = screen.getByRole("button", {name: "Skip"});

        fireEvent.click(skipBtn);

        const timer = screen.getByTestId("time-container");
        expect(timer).toHaveTextContent(/^5:00$/)

    })


    test("restart timer to init learning time when user click End button", async () => {

        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const endBtn = screen.getByRole("button", {name: "End"});
        const timer = screen.getByTestId("time-container");

        fireEvent.click(startPauseBtn);

        await act(() => sleep(1000))
        
        fireEvent.click(endBtn)

        expect(timer).toHaveTextContent("25:00");
    })


    test("end learning block when 'End' button is clicked", () => {

        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const endBtn = screen.getByRole("button", {name: "End"});
        fireEvent.click(endBtn)
        expect(startPauseBtn).toHaveTextContent("Start")
    })
    
    
    test("change break time to active session time on timer when 'End' button is clicked", () => {
        
        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        const skipBtn = screen.getByRole("button", {name: "Skip"});
        const endBtn = screen.getByRole("button", {name: "End"});
        const timer = screen.getByTestId("time-container");

        fireEvent.click(startPauseBtn)
        fireEvent.click(startPauseBtn)
        fireEvent.click(skipBtn)
        fireEvent.click(startPauseBtn)
        fireEvent.click(endBtn);

        expect(timer).toHaveTextContent(/^25:00$/i);

    })

    test('open modal when settings button is clicked and view user settings content', () => {
        render(<App/>)

        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);

        const modal = screen.getByTestId('modal');
        const settingsTab = screen.getByTestId("modal__settings-tab");
        const settingsSectionContent = screen.getByTestId("settings-section");

        expect(modal).toBeVisible();
        expect(settingsTab).toHaveAttribute("aria-pressed", "true");
        expect(settingsSectionContent).toBeInTheDocument();
    })

})