import { render, screen } from '@testing-library/react';
import App from '../App/App';
import ControlPanel from './ControlPanel';

describe('<ControlPanel/> should', () => {
    
    test("be rendered properly", () => {
        render(<ControlPanel globalState={{}}/>)
        const controlPanelComponent = screen.getByTestId("control-panel");
        expect(controlPanelComponent).toBeInTheDocument();
    })
});