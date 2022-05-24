import {render, screen} from '@testing-library/react';
import AppearanceSection from './AppearanceSection';

describe('<AppearanceSection/> should', () => {

    test('be rendered properly', () => {
        render(<AppearanceSection/>);
        const appearanceSectionComponent = screen.getByTestId("appearance-section");
        expect(appearanceSectionComponent).toBeInTheDocument();
    });
    
});