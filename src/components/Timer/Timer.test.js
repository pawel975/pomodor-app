import { render, screen } from '@testing-library/react';
import Timer from './Timer';

describe('<Timer/> should', () => {
    
    test("be rendered properly", () => {
        render(<Timer/>)
        const timerComponent = screen.getByRole("timer");
        expect(timerComponent).toBeInTheDocument();
    })
    
    test("render time container", () => {
        render(<Timer/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toBeInTheDocument();
    })

    test("get time in seconds and properly format it to hh:mm:ss format", () => {
        render(<Timer learningTime={20000}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^5:33:20$/);
    })

    test("format time to mm:ss if time is less then hour", () => {
        render(<Timer learningTime={3520}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^58:40$/);
    })
    
    test("format time to mm:ss if minutes or seconds are less then 10", () => {
        render(<Timer learningTime={124}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^2:04$/);
    })

    test("display 00 seconds if minutes are more then 0", () => {
        render(<Timer learningTime={120}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^2:00$/);
    })

    test("display 00 minutes and 00 seconds if hours are more then 0", () => {
        render(<Timer learningTime={3600}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^1:00:00$/);
    })

    test("display 0 seconds if time is out", () => {
        render(<Timer learningTime={0}/>)
        const timeContainer = screen.getByTestId("time-container");
        expect(timeContainer).toHaveTextContent(/^0$/);
    })

});