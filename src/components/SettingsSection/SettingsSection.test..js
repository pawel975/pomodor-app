import {render, screen, fireEvent} from '@testing-library/react';
import App from '../App/App';

describe('<SettingsSection/> should', () => {
    
    test('not be rendered initially', () => {
        render(<App/>)
        const settingsSectionComponent = screen.queryByTestId("settings-section");
        expect(settingsSectionComponent).not.toBeInTheDocument();
    });

    test("be rendered when settings button on navigation is clicked", () => {
        render(<App/>)
        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);
        const settingsSectionComponent = screen.queryByTestId("settings-section");
        expect(settingsSectionComponent).toBeInTheDocument();
    })

    test("contain 5 user params to change", () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const settingsSectionForm = screen.getByTestId("settings-section__form");
        const settingsSectionParams = screen.getAllByTestId("settings-section__param-container");
        expect(settingsSectionForm).toBeInTheDocument();
        expect(settingsSectionParams).toHaveLength(5);
    })

    test('close modal on "Accept changes" button click in "user settings" tab', () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const acceptChangesBtn = screen.getByTestId("settings-section__accept-changes");
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

        const acceptChangesBtn = screen.getByTestId("settings-section__accept-changes");
        fireEvent.click(acceptChangesBtn);

        const timer = screen.getByRole("timer");

        expect(timer).toHaveTextContent(/^30:00$/i);
        
    });

    test('reset timer and all sessions & blocks when user settings are changed and accepted', () => {
        render(<App/>)

        const startPauseBtn = screen.getByTestId("start-pause-btn");
        fireEvent.click(startPauseBtn);
        fireEvent.click(startPauseBtn);

        const skipBtn = screen.getByText(/^skip$/i);
        fireEvent.click(skipBtn);

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const learningTimeSlider = screen.getByTestId("learning-time");
        fireEvent.change(learningTimeSlider, {target: {value: "30"}});

        const acceptChangesBtn = screen.getByTestId("settings-section__accept-changes");
        fireEvent.click(acceptChangesBtn);

        const timer = screen.getByRole("timer");

        expect(timer).toHaveTextContent(/^30:00$/i);
    });

    test('reset globalState on "reset settings" button click', () => {
        render(<App/>)

        const settingsBtn = screen.getByTestId("settings-nav-btn");
        fireEvent.click(settingsBtn);

        const learningTimeSlider = screen.getByTestId("learning-time");
        fireEvent.change(learningTimeSlider, {target: {value: "30"}});

        const resetSettingsBtn = screen.getByTestId("settings-section__reset-settings");
        fireEvent.click(resetSettingsBtn);
        fireEvent.click(settingsBtn)

        const timer = screen.getByRole("timer");

        expect(timer).toHaveTextContent(/^25:00$/i);
        
    });

});