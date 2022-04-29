import {render, screen} from '@testing-library/react';
import EndBtn from './EndBtn';

describe('<EndBtn> should', () => {

    test("be rendered", () => {
        render(<EndBtn/>)
        const endBtn = screen.getByText("End");
        expect(endBtn).toBeInTheDocument();
    })
})