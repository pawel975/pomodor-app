import { screen, render } from "@testing-library/react";
import StartStopBtn from "./StartStopBtn";

describe('<StartStopBtn/> should', () => {

    test("render properly", () => {
        render(<StartStopBtn/>);
        const buttonComponent = screen.getByTestId("start-stop-btn");
        expect(buttonComponent).toBeInTheDocument();
    })
})