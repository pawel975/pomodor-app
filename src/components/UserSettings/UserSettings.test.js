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

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const userSettingsForm = screen.getByTestId("user-settings__form");
        const userSettingsParams = screen.getAllByTestId("user-settings__param-container");
        expect(userSettingsForm).toBeInTheDocument();
        expect(userSettingsParams).toHaveLength(5);
    })

    test('close modal on "Accept changes" button click in "user settings" tab', () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const acceptChangesBtn = screen.getByTestId("user-settings__accept-changes");
        fireEvent.click(acceptChangesBtn);

        const modal = screen.queryByTestId("modal");
        expect(modal).not.toBeInTheDocument();
        
    });

    test('update globalState on "Accept changes" button click if user settings are changed', () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const learningTimeSlider = screen.getByTestId("learning-time");
        fireEvent.change(learningTimeSlider, {target: {value: "30"}});

        const acceptChangesBtn = screen.getByTestId("user-settings__accept-changes");
        fireEvent.click(acceptChangesBtn);

        const timer = screen.getByRole("timer");

        expect(timer).toHaveTextContent(/^30:00$/i);
        
    });

});