import { screen, render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import StartPauseBtn from "./StartPauseBtn";

describe('<StartPauseBtn/> should', () => {

    test("render properly", () => {
        render(<StartPauseBtn/>);
        const buttonComponent = screen.getByTestId("start-pause-btn");
        expect(buttonComponent).toBeInTheDocument();
    })

    test("contain pause icon if timer runs", () => {
        render(<StartPauseBtn isTimerRun={true}/>);
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const pauseIcon = screen.getByTestId("pause-icon");
        expect(startPauseBtnComponent).toContainElement(pauseIcon)
    })

    test("contain play icon if timer is paused", () => {
        render(<StartPauseBtn isTimerRun={false}/>);
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const playIcon = screen.getByTestId("play-icon");
        expect(startPauseBtnComponent).toContainElement(playIcon)
    })
})