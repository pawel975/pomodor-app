import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App/App';

describe('<UserSettings/> should', () => {
    
    test('not be rendered initially', () => {
        render(<App/>)
        const userSettingsComponent = screen.queryByTestId("user-settings");
        expect(userSettingsComponent).not.toBeInTheDocument();
    });

    test("be rendered when settings button on navigation is clicked", () => {
        render(<App/>)
        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);
        const userSettingsComponent = screen.queryByTestId("user-settings");
        expect(userSettingsComponent).toBeInTheDocument();
    })

    test("contain 5 user params to change", () => {
        render(<App/>)
        const userSettingsForm = screen.getByTestId("user-settings__form");
        const userSettingsParams = screen.getAllByTestId("user-settings__param-container");
        expect(userSettingsForm).toBeInTheDocument();
        expect(userSettingsParams).toHaveLength(5);
    })

});