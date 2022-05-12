import {render, screen} from '@testing-library/react';
import Nav from './Nav';

describe("<Nav/> should", () => {

    test("be rendered properly", () => {
        render(<Nav/>)
        const navComponent = screen.getByRole("navigation");
        expect(navComponent).toBeInTheDocument();
    })
    
})