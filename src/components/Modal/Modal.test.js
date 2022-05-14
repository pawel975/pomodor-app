import {render, screen, fireEvent} from '@testing-library/react';
import Modal from './Modal';
import App from '../App/App';

describe("<Modal/> should", () => {

    test("contain close button", () => {
        render(<Modal/>)
        const modalCloseBtn = screen.getByRole('button', {name: /close modal/i});
        expect(modalCloseBtn).toBeInTheDocument();
    })

    test("not be rendered when app is initialize", () => {
        render(<App/>)
        const modal = screen.queryByTestId("modal");
        expect(modal).not.toBeInTheDocument();
    })

    test("be closed when close button is clicked", () => {

        render(<App/>)

        const settingsBtn = screen.getByRole("button", {name: /settings/i});
        fireEvent.click(settingsBtn);

        const modal = screen.getByTestId("modal");

        const modalCloseBtn = screen.getByRole('button', {name: /close modal/i});
        fireEvent.click(modalCloseBtn);

        expect(modal).not.toBeInTheDocument();
    })
})