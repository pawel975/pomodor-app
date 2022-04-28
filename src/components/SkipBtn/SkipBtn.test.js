import { render, screen } from '@testing-library/react';
import SkipBtn from './SkipBtn';

describe('<Skip/> should', () => {
    
    test("be rendered properly", () => {
        render(<SkipBtn/>)
        const timerComponent = screen.getByText("Skip");
        expect(timerComponent).toBeInTheDocument();
    })

});