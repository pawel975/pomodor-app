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
        const time = screen.getByTestId("time-container");
        expect(time).toBeInTheDocument();
    })
    

});