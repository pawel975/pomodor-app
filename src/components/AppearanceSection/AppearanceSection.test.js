import {render, screen} from '@testing-library/react';
import AppearanceSection from './AppearanceSection';
import userEvent from '@testing-library/user-event';
import AppearanceSectionTheme from '../AppearanceSectionTheme/AppearanceSectionTheme';

describe('<AppearanceSection/> should', () => {

    test('be rendered properly', () => {
        render(<AppearanceSection globalState={{}}/>);
        const appearanceSectionComponent = screen.getByTestId("appearance-section");
        expect(appearanceSectionComponent).toBeInTheDocument();
    });

    test("contain theming section", () => {
        render(<AppearanceSection globalState={{}}/>);
        const appearanceSectionTheme = screen.getByTestId("appearance-section__theme");
        expect(appearanceSectionTheme).toBeInTheDocument();
    })

    test("render theme option", () => {
        render(<AppearanceSection globalState={{}}/>)
        const themeOptions = screen.getAllByTestId("theme-option");
        expect(themeOptions).toHaveLength(3);
    })

    test("change theme when theming option is clicked", async () => {

        const mockHandleThemeChange = jest.fn();

        render(
            <AppearanceSectionTheme 
                themeId="infinite-ocean" 
                themeName="Infinite Ocean"
                handleThemeChange={mockHandleThemeChange}
                globalState={{}}
            />);

        const user = userEvent.setup();

        const themeOption = screen.getByTestId("infinite-ocean");
        await user.click(themeOption);

        expect(mockHandleThemeChange).toHaveBeenCalledTimes(1);
    });
    
});