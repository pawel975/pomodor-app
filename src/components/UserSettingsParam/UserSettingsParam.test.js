import {render, screen} from '@testing-library/react';
import UserSettingsParam from './UserSettingsParam';

describe('<UserSettingsParam/> should', () => {
    
    test('be rendered properly', () => {
        render(<UserSettingsParam/>)
        const settingsParamComponent = screen.getByTestId("user-settings__param-container");
        expect(settingsParamComponent).toBeInTheDocument();
    });

    test("get max value from props", () => {
        render(
            <UserSettingsParam 
                min={1}
                max={100}
                paramValue={50}
            />
        )
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("max", "100")
    })

});