import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App/App';
import SettingsBtn from './SettingsBtn';

describe('<Settings/> should', () => {
    
    test('be rendered properly', () => {
        render(<SettingsBtn/>)
        const settingsComponent = screen.getByRole("button", {name: /settings/i})
        expect(settingsComponent).toBeInTheDocument();    
    });

    test('open settings modal when settings button is clicked', () => {
        render(<App/>)
        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);
        const modal = screen.getByTestId('modal');
        expect(modal).toBeVisible();

    })

});