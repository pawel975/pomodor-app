import { screen, render, fireEvent } from "@testing-library/react";
import { useState } from "react";
import { act } from "react-dom/test-utils";
import Clock from "../Clock/Clock";
import ControlPanel from "../ControlPanel/ControlPanel";
import App from "./App";

describe("<App/> component should", () => {

    test("stop timer from running if control panel paused it", async () => {
        render(
            <App>
                <Clock time={1500}/>
            </App>
        )

        const startPauseBtn = screen.getByTestId("start-pause-btn");

        fireEvent.click(startPauseBtn);
        fireEvent.click(startPauseBtn);
        
        await act(async () => {

            return await new Promise(r => setTimeout(r, 1000));
        })

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
        
        await act(async () => {
            return await new Promise(r => setTimeout(r, 1000));
        })

        const timer = screen.getByTestId("time-container");
        expect(timer).toHaveTextContent("24:59")
    }) 
    
    test("skip to break if learning session is active", () => {

        render(
            <App>
                <Clock 
                    isTimerRun={true}
                    learningTime={1500}
                    breakTime={300}
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

    test("restart timer to init learning time when user click End button", () => {
        
        const MockApp = () => {

            const [globalState, setGlobalState] = useState({
                initLearnTime: 1500,
              })
            const [learnTime, setLearnTime] = useState(1498);
            const [isLearningBlockActive, setIsLearningBlockActive] = useState(true)

            return (
                <App>
                    <Clock learnTime={learnTime} setLearnTime={setLearnTime}/>
                    <ControlPanel 
                        globalState={globalState}
                        setLearnTime={setLearnTime}
                        isLearningBlockActive={isLearningBlockActive}
                        setIsLearningBlockActive={jest.fn(() => setIsLearningBlockActive(false))}>
                    </ControlPanel>
                </App>
            )
        }

        render(
            <MockApp/>
        )

        const endBtn = screen.getByRole("button", {name: "End"});
        const timer = screen.getByTestId("time-container");
        fireEvent.click(endBtn)
        expect(timer).toHaveTextContent("25:00");
    })

})