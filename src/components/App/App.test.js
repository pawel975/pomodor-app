import { screen, render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Clock from "../Clock/Clock";
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

        const timerAfterClick = screen.getByTestId("time-container");
        expect(timerAfterClick).toHaveTextContent("25:00")
    }) 

    test("run timer if control panel play icon is triggered", async () => {

        render(
            <App>
                <Clock time={1500}/>
            </App>
        )

        const startPauseBtn = screen.getByTestId("start-pause-btn");

        fireEvent.click(startPauseBtn);
        
        await act(async () => {
            return await new Promise(r => setTimeout(r, 1000));
        })

        const timerAfterClick = screen.getByTestId("time-container");
        expect(timerAfterClick).toHaveTextContent("24:59")
    }) 

})