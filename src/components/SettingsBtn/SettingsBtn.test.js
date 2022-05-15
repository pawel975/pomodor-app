import {render, screen} from '@testing-library/react';
import SettingsBtn from './SettingsBtn';

describe('<Settings/> should', () => {
    
    test('be rendered properly', () => {
        render(<SettingsBtn/>)
        const settingsComponent = screen.getByRole("button", {name: /settings/i})
        expect(settingsComponent).toBeInTheDocument();    
    });

});