import { screen, render } from "@testing-library/react";
import StartPauseBtn from "./StartPauseBtn";

describe('<StartPauseBtn/> should', () => {

    test("render properly", () => {
        render(<StartPauseBtn globalState={{}}/>);
        const buttonComponent = screen.getByTestId("start-pause-btn");
        expect(buttonComponent).toBeInTheDocument();
    })

    test("contain pause icon if timer runs", () => {
        render(
            <StartPauseBtn globalState={{
                isTimerRun: true,
                isLearningBlockActive: true
                }} 
            />
            )
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const pauseIcon = screen.getByTestId("pause-icon");
        expect(startPauseBtnComponent).toContainElement(pauseIcon)
    })

    test("contain play icon if timer is paused", () => {
        render(
            <StartPauseBtn globalState={{
                isTimerRun: false,
                isLearningBlockActive: true
                }} 
            />
            )
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const playIcon = screen.getByTestId("play-icon");
        expect(startPauseBtnComponent).toContainElement(playIcon)
    })

    test("contain 'start' text if learning block isn't active", () => {
        render(
            <StartPauseBtn globalState={{
                isTimerRun: false,
                isLearningBlockActive: false
                }} 
            />
            )
        const startPauseBtnComponent = screen.getByTestId("start-pause-btn")
        const startText = screen.getByText(/start/i);
        expect(startPauseBtnComponent).toContainElement(startText)
    })
})
