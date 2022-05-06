import { render, screen } from '@testing-library/react';
import ControlPanel from './ControlPanel';

describe('<ControlPanel/> should', () => {
    
    test("be rendered properly", () => {
        render(<ControlPanel/>)
        const controlPanelComponent = screen.getByTestId("control-panel");
        expect(controlPanelComponent).toBeInTheDocument();
    })
    
});